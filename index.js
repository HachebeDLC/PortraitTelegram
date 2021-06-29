const Telegraf = require('telegraf')
require('dotenv').config()
const axios = require('axios').default;
const fetch = require('node-fetch')
const Markup = require('telegraf/markup')
const BOT_TOKEN = process.env.BOT_TOKEN || "";
const PORT = process.env.PORT || 3000;
const URL = process.env.URL 
arrayPregunta = []
const bot = new Telegraf(process.env.BOT_TOKEN)
//bot.start((ctx) => ctx.reply(`Coming straight from P.28 Discord, comes a new challenger!`))
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
bot.on('inline_query', async ctx => {
        sophiePhoto = await getImageInline('DGJuM0i'),
        mariannePhoto = await getImageInline('v7zL3ep')
        heloissePhoto = await getImageInline('71WUFaO')
        comtessePhoto = await getImageInline('WGxm33x')
        const recipes = [{
                        type: 'photo',
                        id: '0',
                        title: 'sophie',
                        thumb_url: 'https://i.imgur.com/vyAuH4Bm.png',
                        // photo_url: 'https://i.imgur.com/vyAuH4B.png',
                        photo_url: sophiePhoto


                },
                {
                        type: 'photo',
                        id: '1',
                        title: 'marianne',
                        thumb_url: 'https://i.imgur.com/i3iq3fQm.png',
                        // photo_url: 'https://i.imgur.com/i3iq3fQ.png',
                        photo_url: mariannePhoto

                },
                {
                        type: 'photo',
                        id: '2',
                        title: 'heloisse',
                        thumb_url: 'https://i.imgur.com/wsqa3Ihm.png',
                        // photo_url: 'https://i.imgur.com/wsqa3Ih.png',
                        photo_url: heloissePhoto

                },
                {
                        type: 'photo',
                        id: '3',
                        title: 'comtesse',
                        thumb_url: 'https://i.imgur.com/2rYW3Vfm.png',
                        // photo_url: 'https://i.imgur.com/2rYW3Vf.png',
                        photo_url: comtessePhoto

                }, {

                        type: 'photo',
                        id: 'tall',
                        title: 'tall',
                        thumb_url: 'https://cdn.discordapp.com/attachments/656037149254090763/676909895475265546/Screenshot_2020-01-24_at_14.30.43.png',
                        photo_url: 'https://cdn.discordapp.com/attachments/656037149254090763/676909895475265546/Screenshot_2020-01-24_at_14.30.43.png'

                },
                {
                        type: 'photo',
                        id: 'baguette',
                        title: 'baguette',
                        thumb_url: 'https://purepng.com/public/uploads/medium/purepng.com-baguette-breadfood-bakery-fresh-tasty-organic-bread-health-breakfast-wheat-barley-941524622910nebfb.png',
                        photo_url: 'https://purepng.com/public/uploads/medium/purepng.com-baguette-breadfood-bakery-fresh-tasty-organic-bread-health-breakfast-wheat-barley-941524622910nebfb.png'

                }
        ];
        console.log('Values',recipes);
        console.log('Query',ctx.inlineQuery.query);
        var search = recipes.filter(x => x.title.includes(ctx.inlineQuery.query));
        console.log('Result', search);
        ctx.answerInlineQuery(search)
})

bot.on('chosen_inline_result', ({
        chosenInlineResult
}) => {
        console.log('chosen inline result', chosenInlineResult)
})

function getImage(album, ctx) {
        var img = '';
        axios.get(`https://api.imgur.com/3/album/${album}/images`, {
                headers: {
                        Authorization: 'Client-ID d4c0728985acdf7'
                }
        }).then(x => {
                img = x.data.data[Math.floor(Math.random() * x.data.data.length)].link
                ctx.replyWithPhoto(img);

        })
}

async function getImageInline(album) {
        var list = await axios.get(`https://api.imgur.com/3/album/${album}/images`, {
                headers: {
                        Authorization: 'Client-ID d4c0728985acdf7'
                }
        });
        var img = list.data.data[Math.floor(Math.random() * list.data.data.length)].link;
        return img;
}
// bot.telegram.setWebhook(`${URL}/bot${BOT_TOKEN}`);
// bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT);
bot.launch()
console.log('Bot iniciado');