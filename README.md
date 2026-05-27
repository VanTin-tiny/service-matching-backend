# Service Matching Platform — Backend API

A production-ready REST + WebSocket backend that connects **customers** who need home or professional services with **providers** (technicians and tradespeople). Built with NestJS, PostgreSQL, Redis, and an AI-powered Vietnamese content moderation layer.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Modules](#modules)
- [Core Workflows](#core-workflows)
- [API Reference](#api-reference)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
  - [Docker (Redis)](#docker-redis)
  - [Database Migrations & Seeding](#database-migrations--seeding)
- [Authentication](#authentication)
- [Content Moderation](#content-moderation)
- [Caching Strategy](#caching-strategy)
- [Rate Limiting](#rate-limiting)
- [Project Structure](#project-structure)
- [Scripts](#scripts)

---

## Overview

The **Service Matching Platform** enables:

| Role | Capabilities |
|------|-------------|
| **Customer** | Post service requests, browse providers, accept quotes, open negotiation chats, confirm order completion, leave reviews |
| **Provider** | Browse the service feed, submit & revise quotes, negotiate via chat, confirm/decline orders, upload certifications, subscribe to premium plans |
| **Admin** | Manage users, review reports & violations, approve/reject certifications, confirm payments, view platform statistics |

The platform supports both **web** (httpOnly cookie–based tokens) and **mobile** (device-bound token pair) authentication flows.

---

## Architecture

```
┌───────────────────────────────────────────────────────┐
│                   NestJS Application                  │
│                                                       │
│  REST API (api/v1/*)          WebSocket (Socket.IO)   │
│  ├─ Auth                      ├─ Chat Gateway          │
│  ├─ Posts                     └─ Notification Gateway  │
│  ├─ Quotes                                            │
│  ├─ Orders                                            │
│  ├─ Chat (REST)                                       │
│  ├─ Reviews                                           │
│  ├─ Search                                            │
│  ├─ Profile                                           │
│  ├─ Certifications                                    │
│  ├─ Subscriptions (+ Stripe)                          │
│  ├─ Custom Requests                                   │
│  ├─ Notifications (REST)                              │
│  └─ Admin                                             │
│                                                       │
│  Infrastructure                                       │
│  ├─ PostgreSQL (TypeORM)                              │
│  ├─ Redis (ioredis) — caching & session               │
│  ├─ Supabase Storage — files & images                 │
│  ├─ Stripe v22 — subscription payments               │
│  ├─ Nodemailer — transactional email (OTP, reset)     │
│  └─ AI Moderation — Qwen / Ollama                     │
└───────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [NestJS](https://nestjs.com/) v10 |
| Language | TypeScript 5 |
| Database | PostgreSQL 15+ via [TypeORM](https://typeorm.io/) v0.3 |
| Cache | Redis 7 via [ioredis](https://github.com/luin/ioredis) |
| File Storage | [Supabase Storage](https://supabase.com/storage) |
| Payments | [Stripe](https://stripe.com/) v22 |
| Real-time | Socket.IO via `@nestjs/platform-socket.io` |
| Auth | JWT (Passport.js), bcrypt, httpOnly cookies |
| Email | Nodemailer |
| Validation | class-validator + class-transformer, Joi |
| API Docs | Swagger / OpenAPI 3 (`@nestjs/swagger`) |
| AI Moderation | Custom Qwen2.5-1.5B LoRA model (Vietnamese) |
| Containerization | Docker Compose (Redis) |
| Testing | Jest |

---

## Modules

### Auth
Handles the full authentication lifecycle for both web and mobile clients.

- **Register** — Creates an account and sends a 6-digit OTP to the user's email for verification.
- **Email Verification** — OTP-based email activation with resend support.
- **Login (Web)** — Returns an `accessToken` in the response body and stores the `refreshToken` in an httpOnly cookie.
- **Login (Mobile)** — Returns both tokens in the response body; bound to a `X-Device-ID` header for per-device session management.
- **Token Refresh** — Issues new access/refresh token pairs; supports both cookie and body refresh flows.
- **Password Reset** — Two flows: link-based (email link) and OTP-based (6-digit code). Both revoke all active sessions on success.
- **Logout** — Single-device and all-device logout for both web and mobile.
- **Security** — Failed login counter, per-account lockout, rate limiting on all sensitive endpoints.

---

### Users
Core user entity with three roles:

| Role | Enum |
|------|------|
| Customer | `CUSTOMER` |
| Technician / Provider | `PROVIDER` |
| Platform Admin | `ADMIN` |

Features soft-delete, account lock, and last-login tracking.

---

### Profile
Manages extended user information beyond credentials.

- View & update profile (display name, avatar, bio, location/province)
- Avatar upload to Supabase Storage
- Provider-specific: trade/occupation registration (multi-trade support with experience years)
- Public profile endpoint for provider discovery
- Contact info update (email / phone)
- Account deletion (soft)

---

### Posts
Service request posts created by customers.

- **Create** — Customers post a job request with title, description, trade category, budget range, and up to 10 images. Content is AI-moderated before publishing.
- **Feed** — Public cursor-based paginated feed of `OPEN` posts.
- **Update / Close / Delete** — Owner-only actions; closed posts can no longer receive quotes.
- **Saved Posts** — Customers can bookmark posts.
- **Status lifecycle:** `OPEN` → `CLOSED`

---

### Quotes
Providers submit price proposals for open posts.

- **Submit** — Provider submits an initial quote (price, description, estimated completion time).
- **Update** — Editable while still `PENDING` (before customer acceptance).
- **Revision** — After chat is opened, providers can revise their offer; full revision history is preserved.
- **Customer Actions** — Accept a quote to open chat, reject a quote, or request an order at the current price.
- **Provider Actions** — Cancel or soft-delete quotes.
- **Quote Lifecycle:** `PENDING` → `ACCEPTED_FOR_CHAT` → `REVISING` → `ORDER_REQUESTED` → `ORDERED` / `CANCELLED`

---

### Chat
Real-time bidirectional messaging between a customer and a provider on a shared quote/post.

- **Conversations** — A conversation is created when a customer accepts a quote for chat.
- **Messages** — Text and system messages; delivered over Socket.IO.
- **Gateway** — JWT-authenticated WebSocket connection; rooms scoped to conversation ID.
- **REST endpoints** — Load conversation list, message history (cursor-paginated).
- **Cache** — Conversation list, messages, and unread counts cached in Redis with tiered TTLs.

---

### Orders
Manages the service engagement between a customer and a provider.

Two creation flows:
1. **Direct Acceptance** — Customer accepts a `PENDING` quote directly (`POST /orders/accept-quote-direct/:quoteId`). Creates the order in `PENDING` status; provider must confirm or decline.
2. **Chat-Negotiation** — After chat, customer signals readiness, then provider confirms (`POST /orders/confirm-from-quote/:quoteId`). Order is created directly in `IN_PROGRESS`.

**Order Lifecycle:**

```
PENDING → IN_PROGRESS → COMPLETED
                     ↘ CANCELLED
```

- Providers can decline a `PENDING` order (direct-acceptance flow only).
- Both parties can cancel within 10 minutes of `IN_PROGRESS`.
- Provider marks work done (`provider-complete`); customer finalises (`customer-complete`) → `COMPLETED`.

---

### Reviews
Post-completion reputation system.

- Customers submit a rating (1–5 stars) and optional comment after an order reaches `COMPLETED`.
- One review per order; providers can respond once.
- Public endpoint returns a provider's review list and average rating.

---

### Notifications
Real-time and persistent notification system.

- Triggered automatically by key lifecycle events (new quote, order confirmed, review received, etc.).
- Delivered in real-time via Socket.IO (Notification Gateway).
- REST endpoints: list notifications, mark as read, mark all as read.
- Unread count badge support with Redis-backed caching.
- Scheduled cleanup task removes stale notifications.

---

### Search
Discovery layer for both posts and providers.

| Endpoint | Description |
|----------|-------------|
| `GET /search` | Global search — posts + providers in one request |
| `GET /search/posts` | Search posts by title, province, trade, budget range |
| `GET /search/providers` | Search providers by name, province, trade |
| `GET /search/by-province` | Filter all content by one of 34 Vietnamese provinces |
| `GET /search/provinces` | Province autocomplete |
| `GET /search/trades` | Trade/occupation catalog with autocomplete |

All searches support Vietnamese diacritics-insensitive matching. Results are cached in Redis.

---

### Certifications
Credential management for providers.

- Providers upload professional certification PDFs (max 10 MB, up to 10 certs).
- Admins review and **approve** or **reject** each certification with a reason.
- Public endpoint exposes only `verified` certifications on a provider's profile.

---

### Subscriptions
Premium access plans for providers, backed by Stripe.

- **Plans** — Admin-managed plans with monthly/yearly billing cycles.
- **Subscribe** — Provider selects a plan; a Stripe `PaymentIntent` is created.
- **Discount Codes** — Configurable discount codes with type (percentage/fixed), maximum usage, and validity window.
- **Webhook** — Stripe webhook handler auto-confirms payment on successful charge event.
- **Cancellation** — Provider can cancel; access continues until the current period ends.
- **Admin Controls** — Confirm/reject payments manually, manage plans and discount codes.

---

### Custom Requests
Private service invitations from a customer to a specific provider.

- Customer sends a targeted request to a known provider.
- Provider can accept (then submit a quote) or decline.
- Notification sent on each action.

---

### Admin
Platform management dashboard APIs.

| Area | Capabilities |
|------|-------------|
| **Users** | List, view, block/unblock, deactivate, hard-delete accounts |
| **Reports** | List user reports, update report status |
| **Violations** | Create violation records, list/filter |
| **Certifications** | Approve or reject pending certifications |
| **Subscriptions** | List all subscriptions, confirm or reject payments |
| **Statistics** | Platform overview, order stats, quote stats (with date/account filters) |

---

## Core Workflows

### Customer Books a Service

```
Customer POST /posts          ← creates an open post (AI-moderated)
Provider POST /quotes         ← submits a quote on the post
Customer POST /quotes/:id/accept-for-chat   ← opens chat conversation
  (negotiation via WebSocket chat)
Customer POST /quotes/:id/request-order     ← requests order at current price
Provider POST /orders/confirm-from-quote/:quoteId ← confirms → IN_PROGRESS
Provider POST /orders/:id/provider-complete ← marks work done
Customer POST /orders/:id/customer-complete ← finalises → COMPLETED
Customer POST /reviews         ← leaves a rating (1–5 ★)
```

### Provider Gains Platform Access

```
Provider POST /auth/register + verify-email
Provider PUT  /profile         ← sets up profile & trades
Provider POST /certifications  ← uploads PDF certification
Admin   PATCH /certifications/:id/verify ← approves cert
Provider GET  /subscription/plans ← browses available plans
Provider POST /subscription/subscribe ← initiates Stripe payment
Stripe Webhook → subscription activated automatically
```

---

## API Reference

Swagger UI is available at:

```
http://localhost:3000/api
```

All REST endpoints are prefixed with `/api/v1` by default (configurable via `API_PREFIX` env var).

---

## Getting Started

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 20 |
| npm | ≥ 10 |
| PostgreSQL | ≥ 15 |
| Redis | ≥ 7 |
| Docker & Docker Compose | Any recent version (for Redis) |
| Python | ≥ 3.10 (optional, for local AI moderation) |

---

### Environment Variables

Copy `.env.example` to `.env.development` (or `.env.production`) and fill in the values:

```bash
# Application
APP_PORT=3000
API_PREFIX=api/v1
NODE_ENV=development

# CORS (comma-separated origins)
CORS_ORIGIN=http://localhost:3001,http://localhost:3000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=service_matching

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRES_IN=7d

# Redis
REDIS_HOST=localhost
REDIS_PORT=6380

# Supabase Storage
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_anon_key
SUPABASE_BUCKET=your-bucket

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (Nodemailer)
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=your@email.com
MAIL_PASS=your_password
MAIL_FROM="Service Matching <noreply@example.com>"

# AI Content Moderation
MODERATION_ENABLED=true
MODERATION_PROVIDER=qwen          # 'qwen' | 'ollama'
MODERATION_FALLBACK_MODE=allow    # 'allow' | 'block'
MODERATION_THRESHOLD_SEXUAL=0.7
MODERATION_THRESHOLD_VIOLENCE=0.7
MODERATION_THRESHOLD_HATE=0.8
MODERATION_THRESHOLD_HARASSMENT=0.75

# Ollama (if MODERATION_PROVIDER=ollama)
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5:7b
```

---

### Running Locally

```bash
# Install dependencies
npm install

# Start in development mode (with hot-reload)
npm run start:dev

# Start in production mode
npm run build && npm run start:prod
```

---

### Docker (Redis)

A `docker-compose.yml` is provided to spin up Redis:

```bash
docker compose up -d
```

This starts Redis on port **6380** (mapped from container port 6379) with:
- LRU eviction policy (`allkeys-lru`)
- 256 MB memory limit
- Persistent volume at `redis_data`

---

### Database Migrations & Seeding

```bash
# Generate a new migration from entity changes
npm run migration:generate -- src/database/migrations/MigrationName

# Run all pending migrations
npm run migration:run

# Revert the last migration
npm run migration:revert

# Seed the admin account
npm run seed:admin
```

---

## Authentication

### Web clients

1. `POST /api/v1/auth/login` — Returns `accessToken` in the JSON body; `refreshToken` is set as an **httpOnly cookie**.
2. Include `Authorization: Bearer <accessToken>` on protected requests.
3. `POST /api/v1/auth/refresh` — Sends the cookie automatically; returns a new `accessToken`.
4. `POST /api/v1/auth/logout` — Clears the cookie.

### Mobile clients

1. `POST /api/v1/auth/login-mobile` — Include `X-Device-ID: <uuid>` header; returns both tokens in the body.
2. `POST /api/v1/auth/refresh-mobile` — Send `{ refreshToken }` in the body + `X-Device-ID` header.
3. `POST /api/v1/auth/logout-mobile` — Revokes the token for that specific device.

---

## Content Moderation

Posts and other user-generated content are automatically screened before publication using a **custom Vietnamese content classifier** fine-tuned from [Qwen2.5-1.5B](https://huggingface.co/Qwen/Qwen2.5-1.5B) with LoRA.

**Detection categories:** `prostitution`, `sexual`, `violence`, `hate`

**Providers:**

| Provider | How it runs |
|----------|-------------|
| `qwen` (default) | Python inference API (`models/inference_api.py`) that loads the local LoRA-merged model |
| `ollama` | Remote Ollama instance; configure `OLLAMA_BASE_URL` and `OLLAMA_MODEL` |

Set `MODERATION_ENABLED=false` to disable screening in development. When the moderation service is unreachable, `MODERATION_FALLBACK_MODE` controls whether posts are allowed (`allow`) or blocked (`block`).

See [models/README.md](models/README.md) for model setup instructions.

---

## Caching Strategy

Redis is used as a **cache-aside** layer across five modules:

| Module | Cached Data | TTL |
|--------|-------------|-----|
| Search | Provider & post search results | 5 min |
| Posts | Post details, feed pages | 10 min |
| Profile | Full profile, contact-only view | 15 min |
| Chat | Conversation list, messages, unread counts | 2–30 min |
| Notifications | Notification list, unread badge count | 2–5 min |

Cache is invalidated on every write path (create / update / delete). Cross-module invalidation is applied where needed (e.g. updating a profile busts search results).

---

## Rate Limiting

Global limit: **10 requests / 60 s / IP** (configurable). Individual endpoints apply tighter limits:

| Endpoint | Limit |
|----------|-------|
| `POST /auth/register` | 5 / min |
| `POST /auth/login` | 10 / min |
| `POST /auth/forgot-password-otp` | 3 / 15 min |
| `POST /auth/reset-password-otp` | 5 / 15 min |
| `POST /auth/resend-verification` | 3 / 15 min |
| `POST /auth/refresh` | 20 / min |

---

## Project Structure

```
src/
├── common/               # Shared decorators, DTOs, guards, interceptors, exceptions
├── config/               # NestJS ConfigModule factories (DB, Redis, moderation)
├── core/                 # AppModule — module composition root
├── database/             # TypeORM setup, migrations bootstrap, admin seeder
└── modules/
    ├── auth/             # Authentication & session management
    ├── users/            # User entity, repository, mapper
    ├── profile/          # Profile entity, avatar upload, trades
    ├── posts/            # Service request posts & saved posts
    ├── quotes/           # Quote bidding & revision history
    ├── chat/             # Conversations, messages, Socket.IO gateway
    ├── orders/           # Order lifecycle management
    ├── reviews/          # Post-order ratings & replies
    ├── notifications/    # Notification entity, gateway, scheduler
    ├── search/           # Full-text search, province & trade catalog
    ├── certifications/   # PDF certification upload & admin approval
    ├── subscription/     # Plans, Stripe payments, discount codes
    ├── custom-requests/  # Private customer-to-provider invitations
    ├── admin/            # Admin controllers & services
    └── redis/            # Shared Redis module (ioredis provider)

models/
├── inference_api.py      # FastAPI inference server for the Qwen moderation model
├── merge_peft_model.py   # Script to merge LoRA adapter into the base model
├── test_model.py         # Quick local model test script
└── requirements.txt      # Python dependencies

docker/
├── Dockerfile.ollama     # Custom Ollama image with the moderation model pre-loaded
└── ollama-entrypoint.sh  # Entrypoint: pull model then start Ollama serve
```

---

## Scripts

```bash
npm run start:dev       # Watch mode development server
npm run start:prod      # Production server (requires prior build)
npm run build           # Compile TypeScript → dist/
npm run test            # Run unit tests (Jest)
npm run test:cov        # Test with coverage report
npm run test:e2e        # End-to-end tests
npm run lint            # ESLint with auto-fix
npm run format          # Prettier format
npm run migration:run   # Apply pending database migrations
npm run seed:admin      # Create the default admin account
```

---

## License

MIT
