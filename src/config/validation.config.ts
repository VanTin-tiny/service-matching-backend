import * as Joi from 'joi';

export default Joi.object({
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().allow('').default(''),
  DATABASE_NAME: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().default(6379),
  REDIS_PASSWORD: Joi.string().allow('').default(''),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().default('1d'),
  STRIPE_SECRET_KEY: Joi.string().required(),
  STRIPE_WEBHOOK_SECRET: Joi.string().required(),
  GMAIL_USER: Joi.string().email().required(),
  GMAIL_APP_PASSWORD: Joi.string().required(),
  APP_NAME: Joi.string().default('ServiceMatch'),
  FRONTEND_URL: Joi.string().uri().default('http://localhost:3000'),
});