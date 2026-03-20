# Hướng dẫn tích hợp Vietnamese Content Moderation Model

Model đã được tích hợp thành công vào NestJS backend.

## 📁 Cấu trúc

```
service-matching-backend-clean/
├── models/
│   ├── vietnamese-content-classifier-final/    # Model đã train
│   ├── inference_api.py                        # Python API script
│   ├── requirements.txt                        # Python dependencies
│   └── README.md
└── src/
    └── modules/
        └── moderation/
            └── services/
                └── qwen-moderation.service.ts   # NestJS service
```

## 🔧 Cài đặt

### 1. Cài đặt Python dependencies

```bash
cd models
pip install -r requirements.txt
```

### 2. Cấu hình Environment Variables

Thêm vào file `.env`:

```bash
# Sử dụng Qwen model
MODERATION_PROVIDER=qwen
MODERATION_ENABLED=true

# Hoặc sử dụng Ollama (mặc định cũ)
# MODERATION_PROVIDER=ollama
```

## 🚀 Sử dụng

Model sẽ tự động được sử dụng khi:
- `MODERATION_PROVIDER=qwen`
- `MODERATION_ENABLED=true`

Service sẽ tự động gọi Python script để chạy inference.

## 🧪 Test

### Test Python script trực tiếp:

```bash
python3 models/inference_api.py "Hôm nay trời đẹp quá"
```

Output:
```json
{
  "prediction": "safe",
  "confidence": 0.83,
  "is_safe": true,
  "should_block": false,
  "inference_time_ms": 190.6,
  "all_scores": {
    "prostitution": 0.0002,
    "sexual": 0.065,
    "violence": 0.005,
    "hate": 0.096,
    "safe": 0.834
  }
}
```

### Test qua NestJS API:

Model sẽ tự động được sử dụng khi gọi `ModerationService.moderatePostContent()`

## 📊 Model Performance

- **Accuracy**: 92.3%
- **F1 Macro**: 91.8%
- **F1 Weighted**: 92.2%

## 🏷️ Labels

Model phân loại 5 categories:
- `prostitution` - Mại dâm
- `sexual` - Tình dục
- `violence` - Bạo lực
- `hate` - Thù hận
- `safe` - An toàn

## ⚙️ Configuration

Model sử dụng threshold mặc định là 0.5. Có thể điều chỉnh trong `qwen-moderation.service.ts`:

```typescript
const result = await this.predictText(text, threshold: 0.5);
```

## 🔍 Troubleshooting

### Lỗi: "Module not found: peft"

```bash
pip install peft>=0.7.0
```

### Lỗi: "Model not found"

Đảm bảo model đã được copy vào `models/vietnamese-content-classifier-final/`

### Lỗi: "Python not found"

Đảm bảo Python 3 đã được cài đặt và có trong PATH:
```bash
which python3
```

## 📝 Notes

- Model sử dụng MPS (Metal Performance Shaders) trên MacBook M4
- Inference time: ~100-200ms trên M4
- Model được load lazy (chỉ load khi cần)
- Memory usage: ~5-6GB trên M4 16GB

## 🔄 Switching Providers

Để chuyển giữa các providers:

```bash
# Sử dụng Qwen (local model)
MODERATION_PROVIDER=qwen

# Sử dụng Ollama
MODERATION_PROVIDER=ollama
```

