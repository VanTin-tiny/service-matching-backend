# Quick Start - Vietnamese Content Moderation

## 🚀 Các bước chạy

### 1. Di chuyển vào thư mục dự án NestJS

```bash
cd /Users/tindethuong/Desktop/mygit/doan/service-matching-backend-clean
```

### 2. Cài đặt Python dependencies

```bash
cd models
pip install -r requirements.txt
cd ..
```

**Lưu ý**: Đảm bảo bạn đang ở trong thư mục dự án NestJS, sau đó vào `models/` để cài đặt.

### 3. Cấu hình Environment Variables

Tạo hoặc cập nhật file `.env` trong thư mục gốc của dự án NestJS:

```bash
# Trong file .env
MODERATION_PROVIDER=qwen
MODERATION_ENABLED=true
```

Hoặc export trực tiếp trong terminal:

```bash
export MODERATION_PROVIDER=qwen
export MODERATION_ENABLED=true
```

### 4. Khởi động NestJS

```bash
npm run start:dev
```

## 📍 Vị trí chạy lệnh

Tất cả các lệnh đều chạy trong thư mục dự án NestJS:
```
/Users/tindethuong/Desktop/mygit/doan/service-matching-backend-clean/
```

## ✅ Kiểm tra

Sau khi start, bạn sẽ thấy log:
```
AI Moderation Service initialized with provider: qwen
Qwen Moderation Service initialized
```

## 🔍 Test nhanh

Bạn có thể test Python script trước:

```bash
cd models
python3 inference_api.py "Hôm nay trời đẹp quá"
```

Nếu thấy output JSON thì model đã hoạt động!

## ⚠️ Lưu ý

1. **Python dependencies**: Chỉ cần cài một lần
2. **Environment variables**: Cần set mỗi lần mở terminal mới, hoặc thêm vào `.env` file
3. **npm run start:dev**: Chạy trong thư mục gốc của dự án NestJS

