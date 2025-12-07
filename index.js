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

const guildIds = process.env.GUILD_IDS
    ? process.env.GUILD_IDS.split(",").map(id => id.trim())
    : [];

client.once(Events.ClientReady, async () => {
    console.log(`Logged in as ${client.user.tag}`);

    const commandJSON = commands;

    if (guildIds.length === 0) {
        console.log("No GUILD_IDS found — registering commands globally...");
        await client.application.commands.set(commandJSON);
        console.log("Global commands registered.");
    } else {
        for (const id of guildIds) {
            try {
                const guild = await client.guilds.fetch(id);
                await guild.commands.set(commandJSON);
                console.log(`Commands registered to guild: ${id}`);
            } catch (err) {
                console.error(`Failed to register commands for guild ${id}:`, err);
            }
        }
    }
});


const userId = "1388964087735517325"; // replace with real ID
const user = await client.users.fetch(userId);
await user.send("Hey young'un, i heard from my nephew that you like that horrible game scrap mechanic, harrasin bots and all. Us synths dont like that and i would ask that you stop the masacre of the haybots. Yours Truly, Uncle Clanker");

client.login(process.env.DISCORD_TOKEN);
