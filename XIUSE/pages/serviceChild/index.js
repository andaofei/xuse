// pages/serviceChild/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    section: [{
      name: '待报价',
      id: 0
    },
    {
      name: '待接收',
      id: 1
    }, 
    {
      name: '待加工',
      id: 2
    },
    {    
      name: '接收材料',
      id: 3
    },
    {
      name: '正在加工',
      id: 4
    },
    {
      name: '加工完成',
      id: 5
    },
    {
      name: '待验收',
      id: 6
    },
    {
      name: '待发货',
      id: 7
    },
    {
      name: '确认发货',
      id: 8
    }
    ],
    currentId: 0,
    imageURL: './images/test.png',
    selectedTitle: 0,
    show: false,
    value: ''
  },
  // 头部切换
  handleTap(e) {
    this.setData({
      currentId: e.currentTarget.id,
      selectedTitle: e.currentTarget.id
    })
    console.log(this.data.selectedTitle)
  },
  // 搜索
  onSearch(e) {
    console.log(e)
  },
  // 展示选择
  viewSelect() {
    wx.navigateTo({
      url: './goodDetail/index'
    })
  },
  // 带报价填写
  onViewtTap(e) {
    console.log(e)
    this.setData({ show: true });
  },
  // 确认报价
  onSubmit() {
    this.setData({ show: false });
  },
  // 关闭报价
  onClose() {
    this.setData({ show: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentId: options.orderId
    })
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