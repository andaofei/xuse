// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: './images/Rectangle4@3x.png',
    itemList: [
      {
        name: '我要加工',
        path: './images/加工.png',
        id: 1
      },
      {
        name: '我要安装',
        path: './images/安装@2x.png',
        id: 2
      },
      {
        name: '购买辅料',
        path: './images/购买辅料.png',
        id: 3
      },
      {
        name: '加工方案',
        path: './images/加工方案.png',
        id: 4
      },
      {
        name: '优惠券',
        path: './images/优惠券.png',
        id: 5
      },
      {
        name: '我要验收',
        path: './images/我要验收.png',
        id: 6
      },
      {
        name: '整体方案',
        path: './images/整体方案.png',
        id: 7
      },
      {
        name: '进入嗅色',
        path: './images/进入嗅色.png',
        id: 8
      },
      {
        name: '服务商',
        path: './images/服务商.png',
        id: 9
      }
    ],
    currentItem: ''
  },
  btnAction(options) {
    let that = this
    let id = options.currentTarget.dataset.id;
    that.setData({
      'currentItem': id
    })
    if (id === 9) {
      wx.navigateTo({
        url: '../service/index'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})