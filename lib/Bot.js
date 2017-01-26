'use strict';

var path = require('path');
var SlackBot = require('slackbots');

class Bot {

    constructor(settings) {

        this.bot = new SlackBot(settings);

        this.bot.on('message', function(data) {
            // all ingoing events https://api.slack.com/rtm 
            //console.log(data);

            if(data.type == "message"){
                console.log(data.text);
            }
        });
    }
}

module.exports = Bot;