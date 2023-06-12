import 'dotenv/config'
import { ActivityType, Client } from 'discord.js';

const client = new Client({ intents: ['Guilds', 'GuildMessages', 'MessageContent'] });

client.login(process.env.TOKEN);

client.on('ready', () => {
    let flip = 0;
    setInterval(() => {
        switch (flip) {
            case 0:
                client.user.setPresence({ activities: [{ name: 'the handle.', type: ActivityType.Watching }] })
                flip++;
                break;
            case 1:
                client.user.setPresence({ activities: [{ name: 'ej', type: ActivityType.Listening }] })
                flip = 0;
                break;
        }
    }, 5000)
});

client.on('messageCreate', async (msg) => {
    try {
        if (msg.content == "ej") {
            msg.member.kick().then((m) => {
                msg.reply("Ejected!");
            }).catch((e) => {
                msg.reply(`Teehee ${e.stack.split("\n")[0]}`);
            });
        }
    } catch (ee) { };
});