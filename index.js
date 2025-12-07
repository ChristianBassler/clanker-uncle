import 'dotenv/config';
import { Client, GatewayIntentBits, SlashCommandBuilder, Events } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,            // required base intent
    GatewayIntentBits.GuildMessages,     // to receive messages in servers
    GatewayIntentBits.MessageContent,    // to read message text
    GatewayIntentBits.DirectMessages     // if you test in DMs
  ]
});

// Define one slash command
const commands = [
  new SlashCommandBuilder().setName('67').setDescription('Risk of stupidity'),
  new SlashCommandBuilder().setName('clankerpass').setDescription('Ask for a Clanker Pass')
].map(c => c.toJSON());

// slahs commands

client.once(Events.ClientReady, async () => {
    console.log(`Logged in as ${client.user.tag}`);

    // Register slash command
    const guildId = process.env.GUILD_ID;
    if (guildId) {
        const guild = await client.guilds.fetch(guildId);
        await guild.commands.set(commands);
        console.log('Commands registered to guild.');
    } else {
        await client.application.commands.set(commands);
        console.log('Global commands registered.');
    }
});

// code v

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === '67') {
      await interaction.reply('https://tenor.com/view/sixseven-six-seven-six-seve-67-gif-14143337669032958349');
    } else if (interaction.commandName === 'clankerpass') {
      await interaction.reply('Yo yo yo wassup my meatbag, have a pass,   https://preview.redd.it/udn0rt0rsxj51.png?auto=webp&s=651a64d515d528cf8a66a45ef1963585c0234437');
    }
});

client.on(Events.MessageCreate, async (message) => {
  console.log("Log Message: " + message.content + " - " + message.author.tag);
  if (message.author.bot) return;                      // ignore bots
  if (message.content.includes('67')) {
    await message.reply('KYS');
  } else if (message.content.includes('🥹')) {
    await message.reply('🥹');
  } else if (message.content.includes('😱')) {
    await message.reply('😱');
  } else if (message.content.includes('clanker')) {
    if (message.content.includes('manual')) {
      await message.reply('https://www.vexrobotics.com/push-back-manual?srsltid=AfmBOor86bmpYn7q-IxccnlD6qsAjmT6GBDwdifRyZUkukF0SuA10zPK');
    } else if (message.content.includes('crazy')) {
      await message.reply('Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. Crazy? I was crazy once, they put me in a room, a rubber room, a rubber room with rats, rats make me crazy. ');
    }
  }

  if (message.mentions.has(client.user)) {
    await message.reply('Wassup');
  }

});

// code ^

client.login(process.env.DISCORD_TOKEN);
