// 引入外部套件
const TelegramBot = require('node-telegram-bot-api');
const token = '1929321227:AAHgSVSe0as2RcSnU9TlHt32QbcDJKS-hXw'; // TODO:請更改
const bot = new TelegramBot(token, { polling: true });

// bot text 
var socialmedia = '手刀加入 WOO Network 台灣社群媒體，不錯過任何一則精彩消息與活動！\n\n ⚡️ Facebook：官方消息、不定時好康活動 \n ⚡️ Twitter：官方消息、資訊討論互動 \n ⚡️ Medium：產業趨勢消息、科普懶人包 \n ⚡️ LINE：資訊討論互動'
var faq = '不管你是 KYC 或是地址證明 ..等，大小疑難雜症歡迎投信至 \n\n support@woo.network'
var woox = '低至零手續費交易所 - WOO X'
var woonetwork = 'https://medium.com/@WOONetwork.tw/%E9%99%A4%E4%BA%86%E8%B3%AA%E6%8A%BC-%E6%8C%81%E6%9C%89-woo-%E9%82%84%E6%9C%89%E9%80%99%E9%BA%BC%E5%A4%9A%E7%9A%84%E7%8D%B2%E7%9B%8A%E5%A0%B4%E6%99%AF-c4c5aa04ef33'
var poa = '📌[ WOO X 關於台灣地區用戶需完成身分認證公告 ] \n\n WOO X 已於 6 月 17 號上線身分認證功能，根據法規 WOO X 將要求台灣地區的用戶完成身分認證。若台灣用戶於7月1號未完成身分認證，將會被限制交易、質押及充提領等服務。為享有帳戶權益，提醒有註冊WOO X的用戶即早完成並通過身分認證！\n\n\ 🔎 身分驗證注意事項：\n\n 1) 僅接受英文資料 \n\n 2) 身分認證僅接受護照 \n\n 3) 地址證明可提交中文版本或身分證正反面（請在證明中附上英文的 Legal Name ，以供 AML 團隊進行核對） \n\n 4) 關於身分認證常見問答與流程：https://support.woo.org/hc/en-001/articles/4405873990681--Individual-Account-KYC-Introduction \n\n 若身分認證上有任何問題，請傳送至support@woo.network，我們將盡快為您處理。\n\n 感謝您對 WOO X的支持! \n\n WOO X Team \n\n'
var kyc = '📌[ WOO X 關於台灣地區用戶需完成身分認證公告 ] \n\n WOO X 的身份認證需要準備護照並按照下方的圖使用「英語」逐行填寫 \n\n 第一部分 Legal Name 為用戶之英文姓名，First Name 為名字, Last Name 為姓氏 \n\n Curreny Address 為居住地或您的身分證上的地址, Country/Region 請填寫 Taiwan , State 也請填寫 Taiwan , City 請填寫目前的居住城市或身分證上的城市 , 剩下的請按照上方需求填寫，最後會進行人臉辨識以及拍攝護照，即可完成 KYC Level 1 驗證。'

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
                    text: "點此獲取更多連結",
                    url: 'https://linktr.ee/woonetworktw'
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
                        text: 'KYC',
                        callback_data: '/KYC'
                    },
                    {
                      text: '地址證明',
                      callback_data: '/POA'
                  }
                ],
                [
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
      bot.sendPhoto(msg.chat.id,'https://i.imgur.com/t2RNelO.png')
    }
  
    if (action === '/POA') {
      text = poa;
      bot.editMessageText(text, opts);
    }
  
    if (action === '/WOO_Network') {
      text = woonetwork;
      bot.editMessageText(text, opts);
    }
  });
