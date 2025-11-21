# Discord Mermaid Bot

[English README 🇺🇸](./README.md)

Discord上でMermaid記法のコードブロックを自動で画像化して返信してくれるBotです。  
Puppeteerを使ってMermaid.jsで描画された図をPNG画像として返信します。

---

## 🚀 機能

- メッセージ内の ```mermaid``` コードブロックを自動検出  
- PuppeteerでMermaidをHTML上にレンダリング  
- 生成された図をPNG画像として返信  
- フローチャート、シーケンス図、ガントチャートなど、Mermaidの全構文に対応  

---

## 💬 使用例

Discordで以下のように送信します：

\`\`\`mermaid
graph TD
  A[Start] --> B{Is it working?}
  B -- Yes --> C[Great!]
  B -- No --> D[Fix it]
  D --> B
\`\`\`

Botが画像でMermaidの図を返信してくれます 🎨

---

## ⚙️ セットアップ

### 1. リポジトリをクローン
```bash
git clone https://github.com/hiroppe0409/discord-mermaid.git
cd discord-mermaid
````

### 2. 依存パッケージをインストール

```bash
npm install
```

### 3. 環境変数を設定

プロジェクトルートに `.env` ファイルを作成し、Discord Botのトークンを記述します：

```env
BOT_TOKEN=あなたのDiscordBotトークン
```

### 4. 実行

```bash
npm start
```

---

## 🧠 仕組み

1. `messageCreate` イベントでメッセージを監視
2. `mermaid` コードブロックを正規表現で検出
3. PuppeteerがMermaid.jsを読み込みブラウザ上で描画
4. `.svg` 要素をPNGとしてスクリーンショット
5. Discordに画像を返信

---

## 🛠 使用技術

| ライブラリ                                 | 用途                      |
| ------------------------------------- | ----------------------- |
| [discord.js](https://discord.js.org/) | Discord Botの実装          |
| [puppeteer](https://pptr.dev/)        | Mermaidレンダリングとスクリーンショット |
| [mermaid.js](https://mermaid.js.org/) | 図表描画                    |
| dotenv                                | 環境変数管理                  |

---

## 📄 ライセンス

MIT License
自由にフォーク・改変して利用できます。

---
