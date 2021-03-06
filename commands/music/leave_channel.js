const commando = require('discord.js-commando');

//Class definition
class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel'
        });
    }

    //Async code that disconnects the bot. Takes the input from the message code to disconnect.
    async run(message, args)
    {
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
        }
        else{
            message.reply('Bot ain\'t here');
        }
    }
}

//Sends out the result of this file to the rest of the program
module.exports = LeaveChannelCommand;