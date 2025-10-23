# Deployment Guide

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL 13+
- Redis 6+
- Docker and Docker Compose (optional)

## Environment Setup

### 1. Environment Variables

Copy the environment template and configure:

```bash
cp .env.example .env.development
```

Required environment variables:
- `NODE_ENV`: Environment (development, test, production)
- `PORT`: Application port (default: 3000)
- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection string
- `JWT_SECRET`: JWT signing secret
- `JWT_EXPIRES_IN`: JWT expiration time

### 2. Database Setup

```bash
# Install dependencies
npm install

# Run database migrations
npm run migration:run

# Seed initial data (optional)
npm run seed:run
```

## Development Deployment

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev

# Run tests
npm run test

# Run e2e tests
npm run test:e2e
```

### Docker Development

```bash
# Build and start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Production Deployment

### Docker Production

1. **Build Production Image**:
```bash
docker build -f docker/Dockerfile.prod -t service-matching-backend .
```

2. **Run with Docker Compose**:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Production Setup

1. **Install Dependencies**:
```bash
npm ci --only=production
```

2. **Build Application**:
```bash
npm run build
```

3. **Run Migrations**:
```bash
npm run migration:run
```

4. **Start Application**:
```bash
npm run start:prod
```

### Process Management

Using PM2 for process management:

```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start dist/main.js --name "service-matching-backend"

# Monitor
pm2 monit

# Restart
pm2 restart service-matching-backend
```

## Database Management

### Migrations

```bash
# Generate migration
npm run migration:generate -- --name=MigrationName

# Run migrations
npm run migration:run

# Revert migration
npm run migration:revert
```

### Seeds

```bash
# Generate seed
npm run seed:generate -- --name=SeedName

# Run seeds
npm run seed:run
```

## Monitoring and Logging

### Health Checks

The application provides health check endpoints:
- `GET /health` - Basic health check
- `GET /health/detailed` - Detailed health information

### Logging

Logs are structured and include:
- Request/response information
- Error details
- Performance metrics
- User activities

### Monitoring

Recommended monitoring tools:
- **Application**: New Relic, DataDog
- **Database**: PostgreSQL monitoring
- **Infrastructure**: Prometheus + Grafana

## Security Considerations

### Production Security Checklist

- [ ] Change default JWT secret
- [ ] Use HTTPS in production
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Enable database SSL
- [ ] Use environment-specific configurations
- [ ] Regular security updates
- [ ] Monitor for vulnerabilities

### SSL/TLS Configuration

For HTTPS in production:

```bash
# Using reverse proxy (nginx)
server {
    listen 443 ssl;
    server_name api.yourdomain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Backup and Recovery

### Database Backup

```bash
# Create backup
pg_dump -h localhost -U username -d database_name > backup.sql

# Restore backup
psql -h localhost -U username -d database_name < backup.sql
```

### Automated Backups

Set up automated backups using cron:

```bash
# Add to crontab
0 2 * * * pg_dump -h localhost -U username -d database_name > /backups/backup_$(date +\%Y\%m\%d).sql
```

## Troubleshooting

### Common Issues

1. **Database Connection Issues**:
   - Check database URL format
   - Verify database is running
   - Check network connectivity

2. **Redis Connection Issues**:
   - Verify Redis is running
   - Check Redis URL format
   - Verify Redis configuration

3. **JWT Issues**:
   - Check JWT secret configuration
   - Verify token expiration settings
   - Check token format

### Debug Mode

Enable debug logging:

```bash
DEBUG=* npm run start:dev
```

### Performance Issues

- Monitor database query performance
- Check Redis cache hit rates
- Analyze application logs
- Use profiling tools
