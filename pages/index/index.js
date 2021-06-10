import{request} from "../../request/index"
Page({
  data: {
    index:'',
    // 语言
    languageshow:true,
    language:'chinese',
    // 选购
    selectIndex:0,
    select:'',
    swiperList:["http://static1.santic.com/%E4%B8%8A%E6%B5%B71.jpg","http://static1.santic.com/%E4%B8%8A%E6%B5%B72.jpg","http://static1.santic.com/%E4%B8%8A%E6%B5%B73.jpg"],
    shopListoGoods:[],
    shopListoHightlight:[],
    change:false
    
  },
  select:{},
  //点击地球语言切换
  handleLanguage(){
   const languageshow=!this.data.languageshow
   this.setData({
    languageshow:languageshow 
   })
  },
  handleSelect(e){
    const {value}=e.currentTarget.dataset;
    const languageshow=!this.data.languageshow
    this.setData({
      languageshow:languageshow,
      // language:value
     })    
     if(value==this.data.language){

     }else{
       this.setData({
              language:value
       })
       wx.setStorageSync('language', value)
      this.getLanguage()
     }

    // 语言标题切换
    // if(this.data.language=="english"){
    //   this.setData({
    //     indexTitle:this.data.enindexTitle
    //   })
    // }else{
    //   this.setData({
    //     indexTitle:this.data.cnindexTitle
    //   })
    // }
    // wx.setStorageSync('language', this.data.language)
  },

  // 选购切换
    handleActiveChange(e){
    const {index}=e.currentTarget.dataset
    this.setData({
      selectIndex:index
    })
  },
  handlebuy(e){
   
  },

  // 异步请求
  // 1.语言切换
  async getLanguage(){
    const json1 = {select:this.data.language};
    const res=await request({url: '/setSession',method:'POST',data:json1})
    if(res.data.msg=="success"){

    }
    this.indexData()
  },
  // 2首页获取
  async indexData(){
    const res=await request({url:'/index'})
       if(wx.getStorageSync('sessionid')){
    }else{
    wx.setStorageSync('sessionid', res.header['Set-Cookie'])
    }
    this.setData({
      shopListoGoods:res.data.oGoods,
      shopListoHightlight:res.data.oIndexHighlight,
      index:1
    })
  },

  // 事件处理函数


  onLoad: function () {
    if(getApp().globalData.globallanguage==wx.getStorageSync('language')){
    }else{
      this.getLanguage()
    };
    // this.getSwiperList();
    //初始化获取数据
    this.indexData()
    wx.setStorageSync('language', this.data.language)
    },
      /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if(getApp().globalData.globallanguage==wx.getStorageSync('language')){
    }else{
      this.getLanguage()
    };
  },
  onShareAppMessage: function () {

  }
  // onShareAppMessage: function (res) {
	// 	return {
	// 	  title: 'Santic',
	// 	  path: 'pages/index/index', // 显示的页面
	// 	  imageUrl: "自定义分享封面地址",
	// 	  success: function (res) {
	// 		// 转发成功
	// 	  },
	// 	  fail: function (res) {
	// 		// 转发失败
	// 	  }
	// 	}
	// // }
  // },

})
