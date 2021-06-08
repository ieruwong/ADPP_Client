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
    date:'1960-01-01',
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
          wx.setStorageSync('bodyinfo', e.detail.value);

          //数据上传
          wx.request({
            url: 'http://localhost:8080/TestWeb/BodyInfo',
            data: {
             date:e.detail.value.date,
             age:e.detail.value.age,
             gender:e.detail.value.gender,
             height:e.detail.value.height,
             weight:e.detail.value.weight,      
             hypertension:e.detail.value.hypertension,      
             diabetes:e.detail.value.diabetes,
             otherdisease:e.detail.value.otherdisease,
             Uid:"001"
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
              console.log(res)         
            }
          })

	      } else if (res.cancel) {
	        console.log('用户点击取消')
	      }
	    }
    })
    

    
  },
weightInput:function(e) {
      let weight = e.detail.value;

      weight = weight.replace(/^(\-)*(\d+)\.(\d).*$/, '$1$2.$3');//只能输入一个小数
      if(weight>199){
        weight = weight.replace(/(\d)(\d)(\d+).*$/, '199');//限制体重小于199
      }

      if (weight.indexOf(".") < 0 && weight != "") {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的数值
          weight = parseFloat(weight);
      }

     return {
      value: weight,
     }
  },

  heightInput:function(e) {
    let height = e.detail.value;
    if(height>299){
      height = height.replace(/(\d+).*$/, '299');//限制身高小于299
    }
    return {
      value: height,
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
    //wx.getStorageSync('bodyinfo')
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