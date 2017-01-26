'use strict';

var Bot = require('./lib/Bot');

var token = process.env.BOT_API_KEY;

var dogBot = new Bot({
    token: token,
    name: 'dogbot'
});