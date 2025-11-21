# Discord Mermaid Bot

[日本語はこちら 🇯🇵](./README.ja.md)

A Discord bot that automatically renders Mermaid diagrams from code blocks and replies with images.  
It uses Puppeteer to generate SVG diagrams rendered by Mermaid.js and captures them as PNG screenshots.

---

## 🚀 Features

- Detects Mermaid code blocks in Discord messages  
- Renders diagrams using Puppeteer + Mermaid.js  
- Replies with the generated diagram as a PNG image  
- Supports all Mermaid syntax (flowcharts, sequence diagrams, Gantt charts, etc.)

---

## 💬 Example

Send a message like this in Discord:

\`\`\`mermaid
graph TD
  A[Start] --> B{Is it working?}
  B -- Yes --> C[Great!]
  B -- No --> D[Fix it]
  D --> B
\`\`\`

The bot will reply with an image of the rendered diagram 🎨

---

## ⚙️ Setup

### 1. Clone the repository
```bash
git clone https://github.com/hiroppe0409/discord-mermaid.git
cd discord-mermaid
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add your Discord bot token:

```env
BOT_TOKEN=your_discord_bot_token
```

### 4. Run the bot

```bash
npm start
```

---

## 🧠 How it works

1. Listens for the `messageCreate` event
2. Detects `mermaid` code blocks using regex
3. Launches Puppeteer and renders the Mermaid diagram in a virtual browser
4. Takes a screenshot of the SVG element
5. Replies to the message with the generated image

---

## 🛠 Tech Stack

| Library                               | Purpose                             |
| ------------------------------------- | ----------------------------------- |
| [discord.js](https://discord.js.org/) | Discord bot framework               |
| [puppeteer](https://pptr.dev/)        | Rendering and screenshot automation |
| [mermaid.js](https://mermaid.js.org/) | Diagram rendering                   |
| dotenv                                | Environment variable management     |

---

## 📄 License

MIT License — feel free to fork and modify.

---
