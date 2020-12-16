// pages/infoEntry/infoEntry.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    age:0,
    gender:null,
    height: 0,
    weight: 0,
    hypertension:false,
    diabetes:false,
    otherdisease:null,
    //出生日期
    date:'1980-01-01',
    //现在时间
    now:'',
  },

  bindAgeChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  //按钮事件
  formSubmit: function (e) {
    wx.showModal({
	    title: '提示',
	    content: '确认修改身体信息',
	    success (res) {
	      if (res.confirm) {

	        var now = new Date();
          e.detail.value.age=now.getFullYear()-e.detail.value.date.substring(0,4);
          // console.log('form发生了submit事件，携带数据为：', e.detail.value);
          wx.setStorageSync('bodyinfo', e.detail.value);
          // console.log(e.detail.value.hypertension)

	      } else if (res.cancel) {
	        console.log('用户点击取消')
	      }
	    }
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

    var bodyinfo = wx.getStorageSync('bodyinfo');
    console.log(bodyinfo);

    var now = new Date();
    this.setData({
      now:now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate(),
      date:bodyinfo.date,
    })
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
    // console.log(this.data.hypertension)
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