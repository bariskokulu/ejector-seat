import 'dotenv/config'
import { ActivityType, Client } from 'discord.js';

const client = new Client({intents:['Guilds', 'GuildMessages', 'MessageContent']});

client.login(process.env.TOKEN);

client.on('ready', () => {
    client.user.setPresence({activities: [{name: ' the handle.', type: ActivityType.Watching}]})
});

client.on('messageCreate', (msg) => {
    if(msg.content=="ej") {
        msg.member.kick();
        msg.reply("Ejected!");
    }
});