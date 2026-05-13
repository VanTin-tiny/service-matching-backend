import {
    BadRequestException,
    Controller,
    Headers,
    HttpCode,
    HttpStatus,
    Logger,
    Post,
    RawBodyRequest,
    Req,
} from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { StripeWebhookService } from '../stripe/stripe-webhook.service';

/**
 * Stripe delivers webhook events to POST /api/v1/stripe/webhook.
 * Configure this URL in:
 *   - Stripe Dashboard → Developers → Webhooks → Add endpoint
 *   - Local dev: stripe listen --forward-to http://localhost:3000/api/v1/stripe/webhook
 *
 * IMPORTANT: this endpoint must NEVER return 5xx for handled events.
 * Stripe retries on any non-2xx response, causing duplicate processing.
 * Only signature failures (400) and missing body (400) are allowed to error out.
 */
@ApiTags('Stripe')
@Controller('stripe')
@SkipThrottle()
export class StripeWebhookController {
    private readonly logger = new Logger(StripeWebhookController.name);

    constructor(private readonly stripeWebhookService: StripeWebhookService) {}

    @Post('webhook')
    @HttpCode(HttpStatus.OK)
    @ApiExcludeEndpoint()
    async handleWebhook(
        @Req() req: RawBodyRequest<Request>,
        @Headers('stripe-signature') signature: string,
    ): Promise<{ received: boolean }> {
        if (!req.rawBody) {
            throw new BadRequestException('Missing raw request body');
        }
        if (!signature) {
            throw new BadRequestException('Missing stripe-signature header');
        }

        // Signature verification failures must surface as 400 so Stripe stops retrying
        // malformed / replayed events. All other errors must swallow to return 200.
        await this.stripeWebhookService.handleEvent(req.rawBody, signature);
        return { received: true };
    }
}
