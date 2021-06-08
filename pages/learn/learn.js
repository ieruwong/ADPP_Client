var jsonData = require('../../data/json');
var util = require('../../utils/util.js');
const appKey = 'fc35d7872c25744ab4669c7d9dbcf15e'
const newsType = 'shehui'
Page({
  data: {
    tabs: [],
    activeTab: 0,
    userInfo: {},
    APInews:{}
  },

//跳转到详情页面
viewDetails: function(e) {
  var id=e.currentTarget.dataset.id
  wx.navigateTo({
    url: '../detail/detail?id='+id
  })
},
//api跳转
viewDetail: function(e) {
  var id=e.currentTarget.dataset.index
  wx.navigateTo({
    url: '../detail/datails/datails?id='+id
  })
},

//页面加载
  onLoad:function() {
    const titles = ['阅读', '新闻', '其它']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})

    var that=this;
    //本地
    util.getAllData(function(news){
          that.setData({
                news:that.detDateFormat(news)
          });
      });

    //API
      wx.request({
        url: 'http://v.juhe.cn/toutiao/index',
        //url: `https://v.juhe.cn/toutiao/index?type=${newsType}&key=${appKey}`,
        data: {
         type: '' ,
         key:'4b72107de3a197b3bafd9adacf685790'
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {

          that.setData({
            APInews:res.data.result.data
          })
          wx.setStorageSync('news', that.data.APInews)          
        }
      })
    },

    detDateFormat:function(news){
      var len=news.length,item;
      for(var i=0;i<len;i++){
          item=news[i];
          item.time=new Date(item.time*1000).format('yyyy-MM-dd hh:mm');
      }
      return news;
  },

  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

   /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
  },



})
