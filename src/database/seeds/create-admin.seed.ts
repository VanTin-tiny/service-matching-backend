/**
 * One-time seed: create the initial admin account.
 * Run with:  npm run seed:admin
 * Env vars are read from .env.development by default.
 */
import 'reflect-metadata';
import * as bcrypt from 'bcrypt';
import * as readline from 'readline/promises';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env.development (same as the app)
dotenv.config({ path: path.resolve(__dirname, '../../../.env.development') });

const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: Number(process.env.DATABASE_PORT ?? 5432),
    username: process.env.DATABASE_USERNAME ?? 'postgres',
    password: process.env.DATABASE_PASSWORD ?? '',
    database: process.env.DATABASE_NAME ?? 'service_matching',
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
    entities: [],
    synchronize: false,
});

async function prompt(rl: readline.Interface, question: string): Promise<string> {
    return rl.question(question);
}

async function main() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    console.log('\n=== Tạo tài khoản Admin ===\n');

    const email = (await prompt(rl, 'Email admin (ví dụ: admin@thotot.vn): ')).trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.error('Email không hợp lệ');
        rl.close();
        process.exit(1);
    }

    const password = (await prompt(rl, 'Mật khẩu (tối thiểu 8 ký tự): ')).trim();
    if (password.length < 8) {
        console.error('Mật khẩu phải có ít nhất 8 ký tự');
        rl.close();
        process.exit(1);
    }

    const fullName = (await prompt(rl, 'Họ và tên (để trống: "Admin"): ')).trim() || 'Admin';
    rl.close();

    await dataSource.initialize();

    try {
        // Check duplicate
        const existing = await dataSource.query(
            `SELECT id FROM users WHERE email = $1 AND deleted_at IS NULL LIMIT 1`,
            [email],
        );
        if (existing.length > 0) {
            console.error(`Email "${email}" đã tồn tại trong hệ thống`);
            process.exit(1);
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const crypto = await import('crypto');
        const userId = crypto.randomUUID();

        // Insert user
        await dataSource.query(
            `INSERT INTO users (id, email, password_hash, role, is_verified, is_active, created_at, updated_at)
             VALUES ($1, $2, $3, 'admin', true, true, NOW(), NOW())`,
            [userId, email, passwordHash],
        );

        // Insert profile
        await dataSource.query(
            `INSERT INTO profiles (id, user_id, full_name, display_name, created_at, updated_at)
             VALUES ($1, $2, $3, $4, NOW(), NOW())`,
            [crypto.randomUUID(), userId, fullName, fullName],
        );

        console.log('\n✅ Tài khoản admin đã được tạo thành công!');
        console.log(`   Email    : ${email}`);
        console.log(`   Họ tên   : ${fullName}`);
        console.log(`   Vai trò  : admin`);
        console.log('\nBây giờ bạn có thể đăng nhập tại http://localhost:3002/login\n');
    } finally {
        await dataSource.destroy();
    }
}

main().catch(err => {
    console.error('Lỗi:', err.message);
    process.exit(1);
});
