// pages/category/category.js
import{request} from "../../request/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allList:[],
    leftcates:[],
    rightcates:[],
    goodsList:[{
      goods_id:1,
      goods_name:'adnjksa啊的哈克的时间哈客户的卡号扩大hdkhajad',
      goods_price:1111
    },{
      goods_id:2,
      goods_name:'adnjksahdkhajad',
      goods_price:1111
    },
    {
      goods_id:3,
      goods_name:'adnjksahdkhajad',
      goods_price:1111
    },
    {
      goods_id:4,
      goods_name:'adnjksahdkhajad',
      goods_price:1111
    },
    {
      goods_id:5,
      goods_name:'adnjksahdkhajad',
      goods_price:1111
    },
    {
      goods_id:6,
      goods_name:'adnjksahdkhajad',
      goods_price:1111
    }],
    // 选择index
    selectIndex:1,
    scrollTop:0,
    // 小标题index
    titleIndex:0,

  },
  Cates:{},
  // 发送请求
  async getList(){
    const data={subId:this.data.selectIndex}
    const res=await request({url:'/list',method:'POST',data:data})
    this.setData({
       rightcates:res.data
    })
    
  },
  // async getCates(){
  //   const res=await wx.request({
  //   })
  //   wx.setStorageSync('cates', {time:Date.now(),data:this.res})
  // },
  handleSelect(e){
     const {value}=e.currentTarget.dataset
     this.setData({
      selectIndex:value,
      scrollTop:0
    })   
    this.getList();

    console.log(this.data.selectIndex);

  },
  async getleft(){
    const res=await request({url:'/category',method:'POST'})
    for(let index in res.data){
      res.data[index].select=false;
    }
    res.data[0].select=true
    this.setData({
      leftcates:res.data
    })
    
  },
  handleItem(e){
    const {value}=e.currentTarget.dataset
    this.data.leftcates[value].select=!this.data.leftcates[value].select
    this.setData({
      leftcates:this.data.leftcates,
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getleft()
    this.getList()
    // 本地缓存
    // const Cates=wx.getStorageSync('cates')
    // if(!Cates){
    //   //发送请求
    //   // get请求
    //   this.getCates();
    // }else{
    //   if(Date.now-Cates.time>1000*30){
    //     this.getCates()
    //   }else{
    //     this.Cates=Cates.data
    //     let rightCates=this.Cates[index].children;
    //     this.setData({

    //     })
    //   }
    // }
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
    if(getApp().globalData.globallanguage==wx.getStorageSync('language')){
    }else{
      this.getList()
      this.getleft()
      getApp().globalData.globallanguage=wx.getStorageSync('language')
    };
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