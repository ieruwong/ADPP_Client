// pages/user/user.js
Page({
	//跳转到信息录入
	infoentry:function(){
		var value = wx.getStorageSync('userinfo');
		if(value.avatarUrl==null){
			wx.showToast({
				title: '请先登录',
				icon: 'none',
				duration: 1500
			})
		}else{
			wx.navigateTo({
        url: '/pages/infoEntry/infoEntry'
      })
		}
  },
// 用户注销
  logout:function(){
	  var that = this;
	  wx.showModal({
	    title: '提示',
	    content: '是否退出登录状态',
	    success (res) {
	      if (res.confirm) {
	        wx.removeStorageSync('userinfo');
					that.onShow();
	      } else if (res.cancel) {
	        console.log('用户点击取消')
	      }
	    }
	  })
  },
//用户登录
  bindGetUserInfo(e){
    //console.log(e);
		const{userInfo}=e.detail;
		wx.setStorageSync('userinfo',userInfo);
	this.onShow();
  },
  
  
  data: {
    userinfo:{},
		status:true
  },
  
  onShow(){
	var status;
    const userinfo=wx.getStorageSync('userinfo');
    this.setData({userinfo});
  }
})