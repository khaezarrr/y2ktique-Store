  var telegramSvg = '<svg width="56" height="56" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#29B6F6"/><path d="M10.5 23.5L35.5 13.5C36.5 13.1 37.4 14 37 15L32.5 36C32.2 37.2 30.7 37.5 30 36.5L23 29L19.5 32.2C18.8 32.8 17.8 32.4 17.6 31.5L16 24.5L10.5 23.5Z" fill="white"/><path d="M17.6 31.5L19.5 32.2L23 29L30 36.5" fill="#B0BEC5"/><path d="M23 29L37 15L16 24.5L23 29Z" fill="#E1F5FE"/></svg>';

  var categories = {
    design: {
      icon: '🎨', title: 'Design & Editing',
      apps: [
        { name: 'CANVA PRO', items: [
          { sub: 'MEMBER', prices: [['1 Hari','2,000'],['1 Minggu','5,000'],['1 Bulan','15,000'],['2 Bulan','18,000'],['3 Bulan','20,000'],['6 Bulan','25,000'],['1 Tahun Garansi 6b','35,000'],['1 Tahun Fullgar','40,000'],['Designer +1K','']] },
          { sub: 'ADMIN', prices: [['1 Bulan 50member','15,000']] },
          { sub: 'OWNER', prices: [['1 Bulan','15,000']] },
          { sub: 'LIFETIME EDUKASI', prices: [['Garansi 4b','40,000'],['Garansi 12b','45,000'],['Akun Seller +1K','']] }
        ]},
        { name: 'PICSART PRO', items: [
          { sub: '', prices: [['1 Bulan Sharing','10,000'],['2 Bulan Sharing','15,000'],['1 Bulan Private','15,000'],['2 Bulan Private','20,000'],['3 Bulan Private','25,000']] }
        ]},
        { name: 'ALIGHT MOTION', items: [
          { sub: '', prices: [['1 Tahun Sharing','10,000'],['6 Bulan Private','8,000'],['1 Tahun Private','20,000']] }
        ]},
        { name: 'CAPCUT PRO', items: [
          { sub: '', prices: [['7 Hari Sharing','8,000'],['14 Hari Sharing','16,000'],['30 Hari Private','30,000 - 40,000'],['35 Hari Sharing','30,000'],['7 Hari Private','10,000'],['35 Hari Private Member','45,000'],['42 Hari Private Plan','50,000']] }
        ]},
        { name: 'IBIS PAINT X', items: [
          { sub: '', prices: [['1 Tahun Andro Gar 6b','15,000']] }
        ]},
        { name: 'DAZZCAM IOS', items: [
          { sub: '', prices: [['Lifetime Garansi 6b','15,000']] }
        ]},
        { name: 'VSCO', items: [
          { sub: '', prices: [['1 Year Gar 6b','30,000']] }
        ]},
        { name: 'MEITU', items: [
          { sub: '', prices: [['1 Minggu Private Andro','10,000']] }
        ]},
        { name: 'WINK', items: [
          { sub: '', prices: [['1 Minggu Private Andro','7,000']] }
        ]}
      ]
    },
    streaming: {
      icon: '🎬', title: 'Streaming Video',
      apps: [
        { name: 'NETFLIX', items: [{ sub: '', prices: [['1 Bulan 1 User','38,000'],['1 Bulan Private','180,000'],['1 Bulan Link','30,000']] }]},
        { name: 'VIU PRIVATE ANLIM', items: [{ sub: '', prices: [['1 Bulan','2,000'],['3 Bulan','5,000'],['6 Bulan','8,000'],['1 Tahun','17,000'],['Lifetime','20,000']] }]},
        { name: 'BSTATION', items: [{ sub: '', prices: [['1 Bulan Sharing','10,000'],['1 Tahun Sharing','27,000'],['1 Bulan Private','20,000']] }]},
        { name: 'IQIYI', items: [
          { sub: 'PREMIUM PLAN', prices: [['1 Bulan Sharing','5,000'],['1 Tahun Sharing','10,000'],['1 Bulan Private','30,000']] },
          { sub: 'BASIC PLAN', prices: [['1 Bulan','26,000']] }
        ]},
        { name: 'AMAZON PRIME', items: [{ sub: '', prices: [['1 Bulan Sharing 4U','10,000'],['2 Bulan Sharing 4U','13,000'],['3 Bulan Sharing 4U','15,000'],['1 Bulan Private','20,000'],['2 Bulan Private','28,000']] }]},
        { name: 'VIDIO PLATINUM', items: [{ sub: '', prices: [['1 Bulan Sharing Mobile','20,000'],['1 Bulan Sharing All Device','25,000'],['1 Bulan Private Mobile','35,000'],['1 Bulan Private All Device','40,000']] }]},
        { name: 'LOKLOK', items: [
          { sub: 'BASIC PLAN', prices: [['4U Sharing','15,000'],['Private','45,000']] },
          { sub: 'STANDAR PLAN', prices: [['5U Sharing','18,000'],['Private','65,000']] }
        ]},
        { name: 'WETV', items: [{ sub: '', prices: [['1 Bulan Sharing 6U','7,500'],['1 Bulan Sharing 3U','12,000'],['1 Bulan Private','28,000']] }]},
        { name: 'DISNEY+', items: [
          { sub: 'SHARING PREMIUM PLAN', prices: [['1 Hari 6U','5,000'],['3 Hari 6U','11,000'],['7 Hari 6U','16,000'],['1 Bulan 6U','21,000'],['1 Bulan 3U','48,000']] },
          { sub: 'PRIVATE PREMIUM PLAN', prices: [['1 Bulan','135,000']] }
        ]},
        { name: 'YOUKU', items: [{ sub: '', prices: [['1 Bulan Sharing','7,000'],['3 Bulan Sharing','10,000'],['1 Tahun Sharing','18,000'],['1 Bulan Private','28,000']] }]},
        { name: 'MOVIEBOX', items: [{ sub: '', prices: [['1 Bulan Sharing Andro','10,000'],['2 Bulan Sharing Andro','20,000'],['1 Bulan Sharing IOS','12,000']] }]},
        { name: 'HBO MAX', items: [
          { sub: 'PLAN STANDAR', prices: [['1 Bulan Sharing 8U',''],['1 Bulan Private','50,000']] },
          { sub: 'PLAN ULTIMATE', prices: [['1 Bulan Sharing','13,000'],['1 Bulan Private','105,000']] }
        ]},
        { name: 'YOUTUBE PREMIUM', items: [
          { sub: 'FAMPLAN', prices: [['1 Bulan','8,000'],['2 Bulan','16,000']] },
          { sub: 'INDPLAN', prices: [['1 Bulan Gsuite','10,000'],['1 Bulan (Akun C)','13,000'],['2 Bulan (Akun C Renew)','15,000'],['3 Bulan (Akun C Renew)','21,000'],['3 Bulan (No Renew)','25,000'],['3 Bulan (No Renew Nogar)','19,000'],['3 Bulan Mix Plan Indplan & Fam','28,000']] }
        ]}
      ]
    },
    music: {
      icon: '🎵', title: 'Music',
      apps: [
        { name: 'APPLE MUSIC', items: [
          { sub: 'IMESS', prices: [['1 Bulan','8,000'],['2 Bulan','13,000'],['3 Bulan Renew','21,000'],['3 Bulan No Renew','30,000']] },
          { sub: 'INDPLAN (ANDRO ONLY)', prices: [['1 Bulan','10,000'],['2 Bulan','18,000']] },
          { sub: 'HEAD (LOGIN DEVICE ANDRO)', prices: [['1 Bulan','20,000']] }
        ]},
        { name: 'SPOTIFY', items: [
          { sub: 'FAMPLAN', prices: [['7 Hari','10,000'],['14 Hari','16,000'],['1 Bulan','20,000'],['2 Bulan','30,000']] },
          { sub: 'INDPLAN', prices: [['7 Hari','12,000'],['1 Bulan','22,000'],['3 Bulan','35,000']] },
          { sub: 'INDPLAN STUDENT', prices: [['1 Bulan Nogar','15,000'],['1 Bulan Fullgar','30,000']] }
        ]},
        { name: 'YOUTUBE MUSIC', items: [
          { sub: 'INDPLAN', prices: [['1 Bulan','20,000'],['2 Bulan','30,000'],['3 Bulan Renewal','40,000']] }
        ]}
      ]
    },
    game: {
      icon: '🎮', title: 'Game (Top Up)',
      apps: [
        { name: 'FREE FIRE', items: [
          { sub: 'DIAMOND', prices: [['10 dm','3,000'],['50 dm','10,000'],['100 dm','20,000'],['150 dm','28,000'],['200 dm','32,000'],['300 dm','45,000'],['400 dm','65,000'],['500 dm','80,000']] },
          { sub: 'MEMBERSHIP', prices: [['Level Up Pass','20,000'],['Membership Weeks','32,000'],['BP Card','50,000'],['Membership Month','100,000']] }
        ]},
        { name: 'MOBILE LEGEND', items: [
          { sub: 'DIAMOND', prices: [['10 dm','7,500'],['30 dm','12,000'],['100 dm','35,000'],['150 dm','45,000'],['200 dm','60,000'],['250 dm','70,000'],['300 dm','85,000'],['500 dm','150,000']] },
          { sub: 'FIRST TOP UP', prices: [['100 dm','20,500'],['300 dm','55,000'],['500 dm','80,500'],['1000 dm','160,500']] },
          { sub: 'WEEKLY PASS', prices: [['1x','35,600'],['2x','65,000'],['3x','90,000'],['4x','120,000'],['5x','150,000']] }
        ]},
        { name: 'ROBLOX', items: [
          { sub: 'KELIP 80R', prices: [['80 Robux','16,000'],['160 Robux','32,000'],['240 Robux','48,000'],['320 Robux','64,000'],['400 Robux','80,000']] },
          { sub: 'KELIP 500R', prices: [['500 Robux','75,000'],['1,000 Robux','150,000'],['1,500 Robux','225,000'],['2,000 Robux','300,000'],['2,500 Robux','375,000'],['3,000 Robux','450,000'],['4,000 Robux','600,000'],['5,000 Robux','750,000'],['10,000 Robux','1,500,000']] },
          { sub: 'LOGIN', prices: [['80 Robux','16,000'],['160 Robux','32,000'],['240 Robux','45,000'],['320 Robux','58,000'],['500 Robux','72,000'],['660 Robux','98,000'],['1000 Robux','140,000'],['1240 Robux','182,000']] },
          { sub: 'GAMEPASS', prices: [['100 Robux','15,000'],['200 Robux','28,000'],['400 Robux','53,000'],['500 Robux','65,000']] },
          { sub: 'JASPAY ROBLOX PLUS', prices: [['Jaspay+ With Trial','10,000'],['Jaspay+ No Trial','95,000']] }
        ]}
      ]
    },
    telegram: {
      isSvg: true, title: 'Telegram Needs',
      apps: [
        { name: 'TELEGRAM STARS', items: [
          { sub: 'TOP UP', prices: [['50 Stars','15,000'],['75 Stars','25,000'],['100 Stars','30,000'],['150 Stars','43,000'],['200 Stars','60,000'],['250 Stars','70,000'],['300 Stars','83,000'],['350 Stars','93,000'],['400 Stars','110,000'],['450 Stars','120,000'],['500 Stars','130,000'],['1000 Stars','260,000']] },
          { sub: 'GIFT', prices: [['15 Stars','5,000'],['25 Stars','8,000'],['50 Stars','15,000']] }
        ]},
        { name: 'TELEGRAM PREMIUM', items: [
          { sub: 'LOGIN', prices: [['1 Bulan Nomor Luar','60,000'],['1 Bulan Nomor Indo','58,000']] },
          { sub: 'GIFT', prices: [['3 Bulan','205,000'],['6 Bulan','270,000'],['12 Bulan','470,000']] }
        ]}
      ]
    },
    ai: {
      icon: '🤖', title: 'AI & Produktivitas',
      apps: [
        { name: 'CHATGPT+', items: [
          { sub: 'MEMBER', prices: [['1 Bulan Garansi 1x','18,000'],['1 Bulan Fullgar','22,000']] },
          { sub: 'HEAD', prices: [['1 Bulan Fullgar','45,000'],['1 Bulan Nogar','40,000']] },
          { sub: 'PLUS PRIVATE', prices: [['1 Bulan Fullgar','35,000'],['1 Bulan Nogar','32,000']] }
        ]},
        { name: 'PERPLEXITY AI', items: [{ sub: '', prices: [['1 Bulan Sharing','10,000'],['3 Bulan Sharing','30,000'],['1 Bulan Private','25,000']] }]},
        { name: 'SCRIBD', items: [{ sub: '', prices: [['1 Bulan Sharing','20,000'],['1 Bulan Private','30,000']] }]},
        { name: 'DUOLINGO', items: [{ sub: '', prices: [['1 Bulan Famplan','10,000'],['2 Bulan Famplan','15,000'],['3 Bulan Famplan','20,000'],['1 Bulan Head Family','25,000']] }]},
        { name: 'MS365', items: [{ sub: '', prices: [['1 Bulan Famplan','15,000'],['3 Bulan Famplan Renewal','25,000'],['1 Bulan Head Family','35,000']] }]},
        { name: 'FIZZO NOVEL', items: [{ sub: '', prices: [['1 Bulan Sharing','10,000']] }]}
      ]
    }
  };
