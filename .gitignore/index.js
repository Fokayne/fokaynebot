const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Créateur Fokayne");
    consol.log("Le bot à bien lancer");
 });

 bot.login("Mzk2ODE5OTExODM5NzExMjUy.DSnDEw.iFPibcacgJUmajeN-4UXl59hlxE");
