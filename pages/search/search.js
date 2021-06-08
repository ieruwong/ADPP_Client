// pages/search/search.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindtest: function(){
    wx.request({
      url: 'http://localhost:8080/TestWeb/SQLGet',
      data:{
        userid:'003',
        password:'abc',
      },
      method:'GET',
      header: {
        'content-type': 'application/json' 
      },
      success:function(res){
        console.log(res);
     
      },
      fail:function(res){
        console.log(".....fail.....");
      }
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 访问聚合数据的网络接口
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data: {
       type: '' ,
       key: '482e213ca7520ff1a8ccbb262c90320a'
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  
      console.log('onLoad')
   
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