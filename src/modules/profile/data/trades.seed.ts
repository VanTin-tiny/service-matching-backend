/**
 * Seed data cho bảng `trades`.
 * Chạy một lần khi deploy lần đầu hoặc khi thêm nghề mới.
 *
 * Usage:
 *   npx ts-node src/database/seeds/trades.seed.ts
 *   hoặc gọi TradeSeeder.run(dataSource) trong seeder runner.
 */

export interface TradeSeedItem {
    name: string;
    slug: string;
    category: string;
    icon: string;
    sortOrder: number;
}

export const TRADE_SEED_DATA: TradeSeedItem[] = [
    // ── Điện - Nước ────────────────────────────────────────────────────────────
    { name: 'Thợ điện', slug: 'tho-dien', category: 'Điện - Nước', icon: '⚡', sortOrder: 1 },
    { name: 'Thợ nước', slug: 'tho-nuoc', category: 'Điện - Nước', icon: '🔧', sortOrder: 2 },
    { name: 'Thợ điện nước', slug: 'tho-dien-nuoc', category: 'Điện - Nước', icon: '🛠️', sortOrder: 3 },
    { name: 'Thợ lắp điều hòa', slug: 'tho-lap-dieu-hoa', category: 'Điện - Nước', icon: '❄️', sortOrder: 4 },
    { name: 'Thợ sửa máy bơm', slug: 'tho-sua-may-bom', category: 'Điện - Nước', icon: '💧', sortOrder: 5 },

    // ── Xây dựng ───────────────────────────────────────────────────────────────
    { name: 'Thợ xây', slug: 'tho-xay', category: 'Xây dựng', icon: '🧱', sortOrder: 10 },
    { name: 'Thợ hồ', slug: 'tho-ho', category: 'Xây dựng', icon: '🪣', sortOrder: 11 },
    { name: 'Thợ sơn', slug: 'tho-son', category: 'Xây dựng', icon: '🎨', sortOrder: 12 },
    { name: 'Thợ chống thấm', slug: 'tho-chong-tham', category: 'Xây dựng', icon: '🏠', sortOrder: 13 },
    { name: 'Thợ lợp mái', slug: 'tho-lop-mai', category: 'Xây dựng', icon: '🏗️', sortOrder: 14 },
    { name: 'Thợ đổ bê tông', slug: 'tho-do-be-tong', category: 'Xây dựng', icon: '🏛️', sortOrder: 15 },

    // ── Nội thất ───────────────────────────────────────────────────────────────
    { name: 'Thợ mộc', slug: 'tho-moc', category: 'Nội thất', icon: '🪵', sortOrder: 20 },
    { name: 'Thợ lắp đồ gỗ', slug: 'tho-lap-do-go', category: 'Nội thất', icon: '🛋️', sortOrder: 21 },
    { name: 'Thợ ốp lát gạch', slug: 'tho-op-lat-gach', category: 'Nội thất', icon: '⬛', sortOrder: 22 },
    { name: 'Thợ trần thạch cao', slug: 'tho-tran-thach-cao', category: 'Nội thất', icon: '🏠', sortOrder: 23 },
    { name: 'Thợ sàn gỗ', slug: 'tho-san-go', category: 'Nội thất', icon: '🪵', sortOrder: 24 },

    // ── Thiết bị gia dụng ─────────────────────────────────────────────────────
    { name: 'Thợ sửa máy giặt', slug: 'tho-sua-may-giat', category: 'Thiết bị gia dụng', icon: '🫧', sortOrder: 30 },
    { name: 'Thợ sửa tủ lạnh', slug: 'tho-sua-tu-lanh', category: 'Thiết bị gia dụng', icon: '🧊', sortOrder: 31 },
    { name: 'Thợ sửa bếp gas', slug: 'tho-sua-bep-gas', category: 'Thiết bị gia dụng', icon: '🔥', sortOrder: 32 },
    { name: 'Thợ sửa máy lạnh', slug: 'tho-sua-may-lanh', category: 'Thiết bị gia dụng', icon: '❄️', sortOrder: 33 },
    { name: 'Thợ sửa máy nước nóng', slug: 'tho-sua-may-nuoc-nong', category: 'Thiết bị gia dụng', icon: '♨️', sortOrder: 34 },

    // ── Cơ khí - Xe ───────────────────────────────────────────────────────────
    { name: 'Thợ sửa xe máy', slug: 'tho-sua-xe-may', category: 'Cơ khí - Xe', icon: '🛵', sortOrder: 40 },
    { name: 'Thợ sửa ô tô', slug: 'tho-sua-o-to', category: 'Cơ khí - Xe', icon: '🚗', sortOrder: 41 },
    { name: 'Thợ hàn', slug: 'tho-han', category: 'Cơ khí - Xe', icon: '⚙️', sortOrder: 42 },
    { name: 'Thợ tiện', slug: 'tho-tien', category: 'Cơ khí - Xe', icon: '🔩', sortOrder: 43 },

    // ── Dọn dẹp - Vệ sinh ─────────────────────────────────────────────────────
    { name: 'Dọn dẹp nhà cửa', slug: 'don-dep-nha-cua', category: 'Dọn dẹp - Vệ sinh', icon: '🧹', sortOrder: 50 },
    { name: 'Vệ sinh máy lạnh', slug: 've-sinh-may-lanh', category: 'Dọn dẹp - Vệ sinh', icon: '🧽', sortOrder: 51 },
    { name: 'Vệ sinh công nghiệp', slug: 've-sinh-cong-nghiep', category: 'Dọn dẹp - Vệ sinh', icon: '🏭', sortOrder: 52 },
    { name: 'Giặt sofa - thảm', slug: 'giat-sofa-tham', category: 'Dọn dẹp - Vệ sinh', icon: '🛋️', sortOrder: 53 },

    // ── Khác ──────────────────────────────────────────────────────────────────
    { name: 'Thợ khóa', slug: 'tho-khoa', category: 'Khác', icon: '🔐', sortOrder: 60 },
    { name: 'Thợ kính', slug: 'tho-kinh', category: 'Khác', icon: '🪟', sortOrder: 61 },
    { name: 'Thợ chụp ảnh', slug: 'tho-chup-anh', category: 'Khác', icon: '📸', sortOrder: 62 },
    { name: 'Thợ điều dưỡng tại nhà', slug: 'tho-dieu-duong-tai-nha', category: 'Khác', icon: '🏥', sortOrder: 63 },
    { name: 'Bảo vệ', slug: 'bao-ve', category: 'Khác', icon: '💂', sortOrder: 64 },
];

// ─── Seeder class ─────────────────────────────────────────────────────────────

import { Trade } from '@/modules/profile/entities/trade.entity';
import { DataSource } from 'typeorm';

export class TradeSeeder {
    static async run(dataSource: DataSource): Promise<void> {
        const repo = dataSource.getRepository(Trade);

        console.log('🌱 Seeding trades...');

        for (const item of TRADE_SEED_DATA) {
            const exists = await repo.findOne({ where: { slug: item.slug } });
            if (!exists) {
                await repo.save(repo.create({ ...item, isActive: true }));
                console.log(`  ✅ Created: ${item.name}`);
            } else {
                console.log(`  ⏭️  Skipped (exists): ${item.name}`);
            }
        }

        console.log('🎉 Trade seeding complete.');
    }
}