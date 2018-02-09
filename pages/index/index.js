//index.js
//获取应用实例
const app = getApp()

Page({
  tapCard: (e) => {
    wx.navigateTo({
      url: './../book/book',
    });
  },
  data: {
    cards: [
      {
        id: "0",
        type: "BOOK",
        surtitle: "童话故事",
        title: "The Matchstick Girl",
        shortDescription: "卖火柴的小女孩",
        fullDescription: "Lorem Ipsum Dolor",
        link: "/hello_world",
        imgUrl: "./matchstick.png",
        displaySettings: {
          colorSchemeTop: "light",
          colorSchemeBottom: "light",
          underlayTop: "underlayOff",
          underlayBottom: "underlayOff",
        }
      },      
      {
        id: "1",
        type: "BOOK",
        surtitle: "童话故事",
        title: "The Little Prince",
        shortDescription: "",
        fullDescription: "",
        link: "/hello_world",
        imgUrl: "./prince.png",
        displaySettings: {
          colorSchemeTop: "dark",
          colorSchemeBottom: "light",
          underlayTop: "underlayOff",
          underlayBottom: "underlayOff",
        }
      },
      {
        id: "2",
        type: "BOOK",
        colorScheme: "dark",
        surtitle: "童话故事",
        title: "The Emperor's New Clothes",
        shortDescription: "A journey around the world, so many places to see. We'll tour Italy, France, Austria, and London!",
        fullDescription: "The quick brown fox jumped over the lazy dog",
        link: "/hello_world",
        imgUrl: "./emperor.png",
        displaySettings: {
          colorSchemeTop: "dark",
          colorSchemeBottom: "dark",
          underlayTop: "underlayOn",
          underlayBottom: "",
        }
      },
      {
        id: "3",
        type: "BOOK",
        colorScheme: "dark",
        surtitle: "历史人物",
        title: "Beethoven: the Deaf Musician",
        shortDescription: "A story about the famous composer, Ludwig van Beethoven",
        fullDescription: "The quick brown fox jumped over the lazy dog",
        link: "/hello_world",
        imgUrl: "./piano2.png",
        displaySettings: {
          colorSchemeTop: "dark",
          colorSchemeBottom: "dark",
          underlayTop: "underlayOn",
          underlayBottom: "underlayOn",
        }
      },
    ]
  },


  /*
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.login({
      success: console.log,
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  */
})
