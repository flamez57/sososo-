//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.mysweet95.top/index.php?m=api&c=search&a=history', 
      data: {
        page: 1,
        page_size: 10
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          historyKeyword:res.data.data
        })
      }
    })
  },
  tapName: function (event) {
    app.globalData.keyword = event.target.dataset.keyword;
  },
  bindFormSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    app.globalData.keyword = formData.keyword;
    wx.switchTab({
      url: '../search/index/search'　　// 页面 A
    })
  },
})
