export interface QuoteNotificationData {
    postId: string;
    quoteId: string;
    providerName?: string;
    customerName?: string;
    price?: number;
    postTitle: string;
    reason?: string;
}