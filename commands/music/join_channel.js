const commando = require('discord.js-commando');

//Class definition
class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel'
        });
    }

    //Async code that runs the music and voice connection. Uses message input to read the command
    async run(message, args)
    {
        if(message.member.voiceChannel){
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                .then(connection => {
                    message.message.reply("I've joined to sing!");
                    const broadcast = connection.playFile('./music.mp3');
                })
            }
        }
        else
        {
            message.reply('You must be in a voice channel to use this bot.');
        }
    }
}

//Sends out the result of this file to the rest of the program
module.exports = JoinChannelCommand;