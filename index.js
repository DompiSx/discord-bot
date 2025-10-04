// Importamos la librería discord.js
const { Client, GatewayIntentBits } = require("discord.js");

// Creamos el cliente del bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Iniciar sesión con el token (se agregará en Render)
client.login(process.env.TOKEN);

// Mensaje cuando el bot se conecte
client.once("ready", () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

// Responder al comando !hola
client.on("messageCreate", (message) => {
  if (message.content === "!hola") {
    message.reply("¡Hola! 👋 Soy tu bot.");
  }
});
