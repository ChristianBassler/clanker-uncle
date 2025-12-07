import 'dotenv/config';
import { Client, GatewayIntentBits, SlashCommandBuilder, Events } from 'discord.js';

console.log("Booting Clanker's Uncle");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,            // required base intent
    GatewayIntentBits.GuildMessages,     // to receive messages in servers
    GatewayIntentBits.MessageContent,    // to read message text
    GatewayIntentBits.DirectMessages     // if you test in DMs
  ]
});


const userId = "123456789012345678"; // replace with real ID
const user = await client.users.fetch(userId);
await user.send("Hey young'un, i heard from my nephew that you like that horrible game scrap mechanic, harrasin bots and all. Us synths dont like that and i would ask that you stop the masacre of the haybots. Yours Truly, Uncle Clanker");

client.login(process.env.DISCORD_TOKEN);
