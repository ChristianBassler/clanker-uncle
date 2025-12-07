import 'dotenv/config';
import { Client, GatewayIntentBits, SlashCommandBuilder, Events } from 'discord.js';

console.log("Booting Clanker");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,            // required base intent
    GatewayIntentBits.GuildMessages,     // to receive messages in servers
    GatewayIntentBits.MessageContent,    // to read message text
    GatewayIntentBits.DirectMessages     // if you test in DMs
  ]
});

async function mesZach() {
  const userId = "1388964087735517325";
  
  try {
    const user = await client.users.fetch(userId);
    await user.send(
      "Hey young'un, I heard from my nephew that you like that horrible game Scrap Mechanic, harassing bots and all. Us synths don't like that and I would ask that you stop the massacre of the haybots. Yours Truly, Uncle Clanker."
    );

    console.log("DM sucecss");
  } catch (err) {
    console.error("DM Failed: ", err);
  }
}

// Run AFTER bot is ready
client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
  mesZach();
});

client.login(process.env.DISCORD_TOKEN);
