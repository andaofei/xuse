// pages/service/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      avator: '/icon/home.png',
      orderList: [
        {
          name: '待报价',
          id: 0,
          src: './images/待报价@2x.png'
        },
        {
          name: '待接收',
          id: 1,
          src: './images/待接收@2x.png' 
        }, 
        {
          name: '待加工',
          id: 2,
          src: './images/待加工@2x.png'
        },
        {    
          name: '接收材料',
          id: 3,
          src: './images/接收材料@2x.png'
        },
        {
          name: '正在加工',
          id: 4,
          src: './images/正在加工@2x.png'
        },
        {
          name: '加工完成',
          id: 5,
          src: './images/加工完成@2x.png'
        },
        {
          name: '待验收',
          id: 6,
          src: './images/待验收@2x.png'
        },
        {
          name: '待发货',
          id: 7,
          src: './images/待发货@2x.png'
        },
        {
          name: '确认发货',
          id: 8,
          src: './images/确认发货@2x.png'
        },
      ],
      more:'./images/更多@2x.png',
      Installation: [
        {
          name: '待报价',
          id: 0,
          src: './images/报价@2x.png'
        },
        {
          name: '待安装',
          id: 1,
          src: './images/待安装@2x.png'
        },
        {
          name: '已取消',
          id: 2,
          src: './images/取消@2x.png'
        },
        {
          name: '已完成',
          id: 3,
          src: './images/完成@2x.png'
        }
      ],
      management: [
          {
            name: '图纸管理',
            id: 1,
            src: './images/图纸审查@2x.png'
          },
          {
            name: '工单处理',
            id: 2,
            src: './images/工单处理@2x.png'
          }
      ]
  },
// 跳转
  slectPage: function(e) {
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../serviceChild/index?orderId=' + e.currentTarget.id
    })
  },
  settingUser() {
    wx.navigateTo({
      url: '../usercenter/index'
    })
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