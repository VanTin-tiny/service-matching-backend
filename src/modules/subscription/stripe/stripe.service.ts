import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

// VND is a zero-decimal currency: amount passed to Stripe IS the final VND value.
// Stripe's minimum per transaction is ~$0.50 USD. At ~25,000 VND/USD that is ≈ 12,500 VND.
// We use 15,000 VND as a safe floor with room for exchange-rate drift.
const VND_MINIMUM_AMOUNT = 15_000;

// Stripe error codes that should surface to the caller as 400 rather than 500.
const STRIPE_CARD_ERROR_CODES = new Set([
    'amount_too_small',
    'amount_too_large',
    'balance_insufficient',
    'card_declined',
    'expired_card',
    'incorrect_cvc',
    'incorrect_number',
    'incorrect_zip',
    'invalid_card_type',
    'invalid_cvc',
    'invalid_expiry_month',
    'invalid_expiry_year',
    'invalid_number',
    'postal_code_invalid',
    'processing_error',
]);

@Injectable()
export class StripeService {
    private readonly logger = new Logger(StripeService.name);
    // `any` avoids the CJS/namespace type mismatch in Stripe v22; runtime is fully typed.
    private readonly stripe: any;
    private readonly webhookSecret: string;

    constructor(private readonly configService: ConfigService) {
        const secretKey = this.configService.get<string>('STRIPE_SECRET_KEY');
        if (!secretKey) throw new Error('STRIPE_SECRET_KEY is not configured');

        this.stripe = new Stripe(secretKey, { apiVersion: '2025-08-27.basil' as any });

        const webhookSecret = this.configService.get<string>('STRIPE_WEBHOOK_SECRET');
        if (!webhookSecret) throw new Error('STRIPE_WEBHOOK_SECRET is not configured');
        this.webhookSecret = webhookSecret;
    }

    async createPaymentIntent(
        amount: number,
        metadata: Record<string, string>,
        idempotencyKey?: string,
    ): Promise<{ id: string; client_secret: string }> {
        const rounded = Math.round(amount);

        if (rounded < VND_MINIMUM_AMOUNT) {
            throw new BadRequestException(
                `Số tiền thanh toán phải từ ${VND_MINIMUM_AMOUNT.toLocaleString('vi-VN')} ₫ trở lên. ` +
                `Hiện tại: ${rounded.toLocaleString('vi-VN')} ₫.`,
            );
        }

        this.logger.log(
            `Creating Stripe PaymentIntent: amount=${rounded} VND, idempotencyKey=${idempotencyKey ?? 'none'}`,
        );

        try {
            const options: Record<string, unknown> = {};
            if (idempotencyKey) options['idempotencyKey'] = idempotencyKey;

            return await this.stripe.paymentIntents.create(
                {
                    amount: rounded,
                    currency: 'vnd',
                    metadata,
                    automatic_payment_methods: { enabled: true },
                },
                options,
            );
        } catch (err: any) {
            this.logger.error(
                `Stripe PaymentIntent creation failed: code=${err?.code}, message=${err?.message}`,
            );
            throw this.mapStripeError(err);
        }
    }

    constructWebhookEvent(payload: Buffer, signature: string): any {
        return this.stripe.webhooks.constructEvent(payload, signature, this.webhookSecret);
    }

    async retrievePaymentIntent(
        paymentIntentId: string,
    ): Promise<{ id: string; client_secret: string; status: string }> {
        this.logger.log(`Retrieving Stripe PaymentIntent: ${paymentIntentId}`);
        try {
            return await this.stripe.paymentIntents.retrieve(paymentIntentId);
        } catch (err: any) {
            this.logger.error(
                `Failed to retrieve Stripe PaymentIntent ${paymentIntentId}: ${err?.message}`,
            );
            throw this.mapStripeError(err);
        }
    }

    async cancelPaymentIntent(paymentIntentId: string): Promise<void> {
        this.logger.log(`Cancelling Stripe PaymentIntent: ${paymentIntentId}`);
        try {
            await this.stripe.paymentIntents.cancel(paymentIntentId);
        } catch (err: any) {
            // Already-cancelled PIs are not an error from our perspective
            if (err?.code === 'payment_intent_unexpected_state') {
                this.logger.warn(`PI ${paymentIntentId} already in terminal state — skipping cancel`);
                return;
            }
            throw err;
        }
    }

    async createRefund(paymentIntentId: string): Promise<void> {
        this.logger.log(`Creating Stripe refund for PaymentIntent: ${paymentIntentId}`);
        try {
            await this.stripe.refunds.create({ payment_intent: paymentIntentId });
        } catch (err: any) {
            this.logger.error(`Stripe refund failed for PI ${paymentIntentId}: ${err?.message}`);
            throw this.mapStripeError(err);
        }
    }

    private mapStripeError(err: any): Error {
        const code: string = err?.code ?? '';
        const type: string = err?.type ?? '';

        if (type === 'StripeCardError' || STRIPE_CARD_ERROR_CODES.has(code)) {
            return new BadRequestException(
                this.friendlyStripeMessage(code, err?.message),
            );
        }

        if (type === 'StripeInvalidRequestError') {
            return new BadRequestException(
                `Yêu cầu thanh toán không hợp lệ: ${err?.message ?? 'Vui lòng thử lại.'}`,
            );
        }

        // Network / provider errors remain 500
        return err;
    }

    private friendlyStripeMessage(code: string, fallback?: string): string {
        const messages: Record<string, string> = {
            amount_too_small: `Số tiền thanh toán quá nhỏ. Vui lòng chọn gói có giá tối thiểu ${VND_MINIMUM_AMOUNT.toLocaleString('vi-VN')} ₫.`,
            amount_too_large: 'Số tiền thanh toán vượt quá giới hạn cho phép.',
            card_declined: 'Thẻ bị từ chối. Vui lòng kiểm tra lại hoặc dùng thẻ khác.',
            expired_card: 'Thẻ đã hết hạn. Vui lòng dùng thẻ khác.',
            incorrect_cvc: 'Mã CVC không đúng.',
            incorrect_number: 'Số thẻ không đúng.',
            insufficient_funds: 'Số dư không đủ.',
            balance_insufficient: 'Số dư không đủ để thực hiện giao dịch.',
            processing_error: 'Lỗi xử lý thanh toán. Vui lòng thử lại sau.',
        };
        return messages[code] ?? fallback ?? 'Thanh toán thất bại. Vui lòng thử lại.';
    }
}
