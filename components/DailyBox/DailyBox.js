Component({
  /**
   * 组件的属性列表
   */
  properties: {
    boxtext: {
      type: String,
      value: '打卡',
    },
    
    imgsrc: {
      type: String,
      value: '/images/daily/zaoshui.png',
    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    dailysign:true,
    Fimgsrc: "/images/daily/finish.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dailysi:function(){
      var that = this;
      var dailysign;
      wx.showModal({
        title: that.properties.boxtext,
        content: '是否完成'+that.properties.boxtext+'打卡',
        success (res) {
          if (res.confirm) {
            dailysign=false;
            that.setData({dailysign});
          } else if (res.cancel) {
            console.log('cancel');
          }
        }
      })
    },

    finish:function(){
      wx.showToast({
        title: '今日已经完成',
        icon: '',
      })
    },
  }
})
