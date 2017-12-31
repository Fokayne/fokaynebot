const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Créateur Fokayne");
    consol.log("Le bot à bien lancer");

    client.on('message', msg => {
        if (msg.content === 'créateur') {
          msg.reply('Fokayne le plus beau !');
        }
      });

 });

 bot.login("Mzk2ODE5OTExODM5NzExMjUy.DSnDEw.iFPibcacgJUmajeN-4UXl59hlxE");
