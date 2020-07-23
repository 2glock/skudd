const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',() => {
    console.log('Skuddie den woke up!!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('pong').execute(message, args);
    } else if (command === 'servers'){
        client.commands.get('servers').execute(message,args);
    }
});

client.login('NzM1ODExNjQyOTE0NTA0NzY0.XxmAog.wAvuM8py_f0HTj567B_0gsce2mo');
 