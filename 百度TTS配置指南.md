# 百度语音合成配置指南

本文档说明如何为炫卡游戏配置百度云端 TTS，解决部分设备（如华为平板鸿蒙系统）Web Speech API 不可用的问题。

---

## 一、为什么需要百度 TTS

游戏默认使用浏览器的 Web Speech API 进行语音朗读，但以下设备可能存在问题：

| 设备/系统 | 问题 |
|----------|------|
| 华为平板（鸿蒙系统） | 浏览器缺少中文语音包 |
| 部分安卓设备 | Web Speech API 不完整 |
| iOS 低版本 | 语音列表加载延迟 |

配置百度 TTS 后，游戏会自动检测并切换到云端语音服务。

---

## 二、获取百度 API 密钥

### 步骤 1：注册百度智能云账号

1. 访问 [百度智能云](https://cloud.baidu.com/)
2. 注册账号并完成实名认证

### 步骤 2：创建语音合成应用

1. 进入控制台 → 产品服务 → 人工智能 → **语音技术**
2. 点击「创建应用」
3. 填写应用名称，勾选「短语音合成」
4. 创建成功后，记录以下信息：
   - **App ID**
   - **API Key**
   - **Secret Key**

### 步骤 3：获取 Access Token（推荐）

由于前端代码不应暴露 Secret Key，推荐通过后端获取 Access Token：

```bash
# 获取 Access Token（有效期 30 天）
curl -X POST 'https://aip.baidubce.com/oauth/2.0/token' \
  -d 'grant_type=client_credentials' \
  -d 'client_id=YOUR_API_KEY' \
  -d 'client_secret=YOUR_SECRET_KEY'
```

返回结果中的 `access_token` 即为所需 Token。

---

## 三、在游戏中配置

### 方式 1：在应用启动时配置

修改 `src/main.tsx` 或 `src/App.tsx`：

```typescript
import { speechService } from '@/services';

// 在应用启动时配置
speechService.configureBaiduTTS(
  'YOUR_API_KEY',
  'YOUR_SECRET_KEY',
  'YOUR_ACCESS_TOKEN' // 可选，推荐使用
);
```

### 方式 2：通过环境变量配置

创建 `.env.local` 文件：

```
VITE_BAIDU_TTS_API_KEY=your_api_key
VITE_BAIDU_TTS_SECRET_KEY=your_secret_key
VITE_BAIDU_TTS_ACCESS_TOKEN=your_access_token
```

修改配置代码：

```typescript
speechService.configureBaiduTTS(
  import.meta.env.VITE_BAIDU_TTS_API_KEY,
  import.meta.env.VITE_BAIDU_TTS_SECRET_KEY,
  import.meta.env.VITE_BAIDU_TTS_ACCESS_TOKEN
);
```

**注意**：环境变量方式仍会将密钥打包到前端代码，仅供测试使用。

---

## 四、安全建议

### 生产环境推荐方案

1. **使用后端代理**
   - 创建一个简单的 API 端点返回 Access Token
   - 前端只存储 Token，不暴露 API Key

2. **使用 Serverless 函数**
   - Vercel / Cloudflare Workers / AWS Lambda
   - 函数负责获取 Token 并代理 TTS 请求

3. **预生成常用语音**
   - 将常用台词预生成 MP3 文件
   - 打包到项目中直接播放

---

## 五、免费额度说明

百度语音合成免费额度：

| 服务 | 免费额度 |
|------|----------|
| 短语音合成 | 每日 5 万次 |
| 新用户赠送 | 5 万次/年 |

对于儿童教育游戏，免费额度通常足够使用。

---

## 六、故障排查

### 问题：配置后仍无法朗读

1. 打开浏览器控制台，检查日志：
   - `[SpeechService] Switched to BAIDU_TTS mode` - 表示切换成功
   - `[BaiduTTS] Access token obtained` - 表示 Token 获取成功

2. 检查网络请求：
   - 是否有 `tsn.baidu.com` 的请求
   - 请求是否返回 200

3. 检查音频播放：
   - 浏览器是否允许自动播放
   - 用户是否已点击页面（移动端需要交互才能播放）

### 问题：Access Token 过期

Access Token 有效期约 30 天，过期后需要重新获取。建议：
- 定期更新 Token
- 或实现自动刷新机制

---

## 七、相关文件

| 文件 | 说明 |
|------|------|
| `src/services/baidu-tts.service.ts` | 百度 TTS 服务实现 |
| `src/services/speech.service.ts` | 语音服务主逻辑（自动切换） |
| `src/services/index.ts` | 服务导出 |

---

## 八、API 参考

### speechService.configureBaiduTTS()

配置百度 TTS 服务。

```typescript
speechService.configureBaiduTTS(
  apiKey: string,      // 百度 API Key
  secretKey: string,   // 百度 Secret Key
  accessToken?: string // 预获取的 Access Token（推荐）
);
```

### speechService.getTTSMode()

获取当前 TTS 模式。

```typescript
const mode = speechService.getTTSMode();
// 返回值：
// - 'web_speech' - 使用浏览器 Web Speech API
// - 'baidu_tts' - 使用百度云端 TTS
// - 'silent' - 语音不可用
```

---

如有问题，请查看控制台日志或联系开发者。
