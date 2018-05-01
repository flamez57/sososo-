//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: '搜索',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  inputChange:function (event) {
    console.log(event);
  },
  onLoad: function () {
    this.setData({
      keyword: app.globalData.keyword
    })
    console.log(app.globalData.keyword);
    var that = this;
    wx.request({
      url: 'https://www.mysweet95.top/index.php?m=api&c=search&a=list',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          searchList:res.data.data
        })
      }
    })
  },
})
