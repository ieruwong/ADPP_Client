// pages/exercise/exercise.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'abcd',
    age:'',
    id:'001'
  },
  
  bindtest: function(){
    let self=this;
    wx.request({
      url: 'http://localhost:8080/TestWeb/SQLGet',
      data:{
        username:self.data.name,
        password:'1234',
        id:self.data.id
      },
      method:'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        //console.log("返回："+res.data);
        //console.log("初始："+self.data.age);
        self.setData({
          age:res.data
        });
        console.log("变更："+self.data.age);
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