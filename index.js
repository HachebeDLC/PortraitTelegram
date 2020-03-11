const Telegraf = require('telegraf')
require('dotenv').config()
const axios = require('axios').default;

arrayPregunta = []
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Coming straight from P.28 Discord, comes a new challenger!`))
bot.help((ctx) => ctx.reply(`Questions to @HachebeDLC`))

bot.command('sophie', (ctx) => {
        getImage('DGJuM0i', ctx);
})
bot.command('marianne', (ctx) => {
        getImage('v7zL3ep', ctx);
})
bot.command('heloisse', (ctx) => {
        getImage('71WUFaO', ctx);
})
bot.command('comtesse', (ctx) => {
        getImage('WGxm33x', ctx);
})
bot.command('tall', (ctx) => {
   ctx.replyWithPhoto('https://cdn.discordapp.com/attachments/656037149254090763/676909895475265546/Screenshot_2020-01-24_at_14.30.43.png')
})
bot.command('looking', (ctx) => {
   ctx.replyWithPhoto('https://i.imgur.com/ZgLShiJ.jpg')
})
bot.command('baguette', (ctx) => {
   ctx.replyWithPhoto('https://purepng.com/public/uploads/medium/purepng.com-baguette-breadfood-bakery-fresh-tasty-organic-bread-health-breakfast-wheat-barley-941524622910nebfb.png')
})
function getImage(album, ctx) {
axios.get(`https://api.imgur.com/3/album/${album}/images`, {
    headers: {
        Authorization: 'Client-ID d4c0728985acdf7'
    }
}).then(x => {
    const img = x.data.data[Math.floor(Math.random() * x.data.data.length)].link
    ctx.replyWithPhoto(img);
})
}
bot.launch()