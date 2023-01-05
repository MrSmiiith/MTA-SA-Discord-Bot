const botConfig = require("../config/client.json");
const Discord = require("discord.js");
module.exports = function (info) {
    info.client.commands = new Discord.Collection();

    ['events', 'commands']
        .filter(Boolean)
        .forEach(item => {
            require(`./handler/${item}`)(info.client);
        });

    info.client.login(botConfig.bot.token).catch(e => {
        console.log(`[Error]`.red, "Invalid or No Bot Token Provided.".green)
    })
}