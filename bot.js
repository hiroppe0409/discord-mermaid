import { Client, GatewayIntentBits } from 'discord.js';
import puppeteer from 'puppeteer';
import 'dotenv/config';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

async function renderMermaid(mermaidCode) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1600,
    height: 1200,
    deviceScaleFactor: 2,
  });

  await page.setContent(`
    <html>
      <head>
        <style>
          body, html {
            margin: 0;
            padding: 0;
          }
          .mermaid svg {
            display: block;
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        <div class="mermaid">
          ${mermaidCode}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
        <script>
          mermaid.initialize({ startOnLoad: true, theme: 'default' });
        </script>
      </body>
    </html>
  `);

  await page.waitForSelector('.mermaid svg');

  const element = await page.$('.mermaid svg'); 
  const box = await element.boundingBox();

  const buffer = await element.screenshot({
    type: 'png',
    clip: {
      x: box.x,
      y: box.y,
      width: Math.ceil(box.width),
      height: Math.ceil(box.height),
    },
  });

  await browser.close();
  return buffer;
}

const mermaidRegex = /```mermaid\n([\s\S]+?)```/g;

client.on('messageCreate', async (message) => {
  if (message.author.id === client.user.id) return;

  const matches = [...message.content.matchAll(mermaidRegex)];

  for (const match of matches) {
    const code = match[1];
    try {
      const imageBuffer = await renderMermaid(code);
      await message.reply({ files: [{ attachment: imageBuffer, name: 'diagram.png' }] });
    } catch (err) {
      await message.reply(`An error occurred while drawing Mermaid:\n${err.message}`);
    }
  }
});

client.login(process.env.BOT_TOKEN);
