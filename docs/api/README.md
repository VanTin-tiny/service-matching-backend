# Service Matching Backend API Documentation

## Overview
This document provides comprehensive API documentation for the Service Matching Backend application.

## Base URL
- Development: `http://localhost:3000`
- Production: `https://api.service-matching.com`

## Authentication
The API uses JWT (JSON Web Token) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - User logout

### Users
- `GET /users` - Get all users (paginated)
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Products
- `GET /products` - Get all products (paginated)
- `GET /products/:id` - Get product by ID
- `POST /products` - Create new product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

### Orders
- `GET /orders` - Get all orders (paginated)
- `GET /orders/:id` - Get order by ID
- `POST /orders` - Create new order
- `PUT /orders/:id` - Update order
- `DELETE /orders/:id` - Delete order

## Response Format
All API responses follow a consistent format:

```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Error Handling
Errors are returned with appropriate HTTP status codes and error messages:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": []
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Pagination
List endpoints support pagination with the following query parameters:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `sort`: Sort field
- `order`: Sort order (asc/desc)

## Rate Limiting
API requests are rate limited to prevent abuse:
- 100 requests per minute per IP
- 1000 requests per hour per authenticated user
