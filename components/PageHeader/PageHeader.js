// components/PageHeader/PageHeader.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  }, 

  /**
   * 组件的初始数据
   */
  data: {
    userimg:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toSearch:function(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    },
  },
  pageLifetimes: {
    
    show: function() {
      // 页面被展示
      var userimg;
      var value = wx.getStorageSync('userinfo');
      if(value.avatarUrl!=null){
        userimg=value.avatarUrl;
      }else{
        userimg="/images/user.png"
      }
      this.setData({userimg});
    },
    hide: function() {
      // 页面被隐藏      
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  }
})
