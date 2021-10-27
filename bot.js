// 引入外部套件
const TelegramBot = require('node-telegram-bot-api');
const token = process.env["API_KEY"];
const bot = new TelegramBot(token, { polling: true });

// bot text 
var socialmedia = '手刀加入 WOO Network 台灣社群媒體，不錯過任何一則精彩消息與活動！\n\n ⚡️ Facebook：官方消息、不定時好康活動 \n ⚡️ Twitter：官方消息、資訊討論互動 \n ⚡️ Medium：產業趨勢消息、科普懶人包 \n ⚡️ LINE：資訊討論互動'
var faq = '不管你是 KYC 或是地址證明 ..等，大小疑難雜症歡迎投信至 \n\n support@woo.network'
var woox = '低至零手續費交易所 - WOO X'
var woonetwork = 'https://medium.com/@WOONetwork.tw/%E9%99%A4%E4%BA%86%E8%B3%AA%E6%8A%BC-%E6%8C%81%E6%9C%89-woo-%E9%82%84%E6%9C%89%E9%80%99%E9%BA%BC%E5%A4%9A%E7%9A%84%E7%8D%B2%E7%9B%8A%E5%A0%B4%E6%99%AF-c4c5aa04ef33'
var kyc = '跟我們一起來 KYC 吧！ \n\n https://bit.ly/3uBrGz2'

bot.onText(/\/start@woobot/, (msg) => {
  bot.sendMessage(msg.chat.id, "hello", {
  "reply_markup": {
      "keyboard": [
        [
          {
            text: '加入社群',
          }
          , 
          {
            text: 'WOO X',
          }
        ],   
        [
          {
            text: '官方網站',
          }
          , 
          {
            text: '常見問題',
          }
        ],
        [
          {
            text : '抽獎活動：不給 WOO 就搗蛋'
          }
        ]
      ]
      }
  });
  });

/* WOO Network tw reply */
bot.onText(/加入社群/, (msg, match) => {
  bot.sendMessage(msg.chat.id, socialmedia, {
      "reply_markup": {
          "inline_keyboard": [
              [
                  {
                      text: "Facebook",
                      url: 'https://www.facebook.com/WOONetwork.tw'
                  },
                  {
                    text: "Twitter",
                    url: 'https://twitter.com/WOOnetwork_CN'
                },
              ],
              [
                {
                    text: "Medium",
                    url: 'https://medium.com/@WOONetwork.tw'
                },
                {
                  text: "LINE",
                  url: 'https://line.me/ti/g2/5fcFq_yjTQkMcj9YLqdGZQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default'
                },
              ],
              [
                {
                  text: "Telegram 公告",
                  url: "https://t.me/WOONetworkTWann"
                },
                {
                  text: "點此獲取更多連結",
                  url: 'https://linktr.ee/woonetworktw'
                }
              ],
          ],
      },
  });
});

// 萬聖節活動
bot.onText(/抽獎活動：不給 WOO 就搗蛋/, (msg, match) => {
  bot.sendMessage(msg.chat.id, "萬聖節快樂！不給 $WOO 就搗蛋！", {
      "reply_markup": {
          "inline_keyboard": [
              [
                  {
                      text: "點我立即參加!",
                      url: 'https://bit.ly/3b9PK3d'
                  },
              ],
          ],
      },
  });
});

  /* WOO 官方網站  reply */
  bot.onText(/官方網站/, (msg, match) => {
    bot.sendMessage(msg.chat.id, "想了解更多 WOO Network 來看吧！", {
        "reply_markup": {
            "inline_keyboard": [
                [
                    {
                        text: "官方網站",
                        url: 'https://woo.org/'
                    },
                ],
            ],
        },
    });
  });
  
  bot.onText(/WOO X/, (msg, match) => {
    bot.sendMessage(msg.chat.id, woox, {
        "reply_markup": {
            "inline_keyboard": [
                [
                    {
                        text: '點我註冊 WOO X !',
                        url: 'https://x.woo.org/register'
                    },
                ],
            ],
        },
    });
  });
  
  /* 常見問題 reply */
  bot.onText(/常見問題/, (msg, match) => {
    bot.sendMessage(msg.chat.id, faq, {
        "reply_markup": {
            "inline_keyboard": [
                [
                    {
                        text: 'KYC 教學',
                        callback_data: '/KYC'
                    },
                    {
                      text: 'WOO Network 應用場景',
                      callback_data: '/WOO_Network',
                  }
                ]
            ],
        },
    });
  });
  
  /* Call Back */
  bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    const opts = {
      chat_id: msg.chat.id,
      message_id: msg.message_id,
    };
    let text;
  
    if (action === '/KYC') {
      text = kyc;
      bot.editMessageText(text, opts);
    }
  
    if (action === '/WOO_Network') {
      text = woonetwork;
      bot.editMessageText(text, opts);
    }
  });
