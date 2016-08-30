'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('203649467:AAHp0wUP3RjKi3C4JslU2waCxtB9Cx8L-P4')

class PingController extends TelegramBaseController {

    pingHandler($) {
        var date = new Date();
        $.sendMessage(date.getMinutes())
    }

    get routes() {
        return {
            'ping': 'pingHandler'
        }
    }
}

tg.router
    .when(['/pesan'], new PingController())
