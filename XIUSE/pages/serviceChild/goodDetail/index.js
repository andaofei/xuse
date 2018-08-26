// pages/serviceChild/goodDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  goods: [
    {
    name: 'aj-31',
    id: 0
  },
  {
    name: 'aj-32',
    id: 1
  },
  {
    name: 'aj-33',
    id: 2
  },
  {
    name: 'aj-34',
    id: 3
  },
  {
    name: 'aj-35',
    id: 4
  }
],
currentId: -1
  },
  handleSelect(e) {
    this.setData({
      currentId: e.currentTarget.id
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