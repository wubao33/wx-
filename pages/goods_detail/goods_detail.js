// pages/goods_detail/goods_detail.js
import{request} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
  goodsImage:[],
  GoodsInfo:[],
  infoImage:[],
  goodsId:'',
  language:'',
  oSize:[]
  },


  
  async getGoodsDetail(goods_id){
   const goodsObj=await request({url:"/detail",method:'POST',data:{goods_id}})
   this.setData({
    goodsImage:goodsObj.data.oGoodsImages,
    GoodsInfo:{
      oName:goodsObj.data.oName,
      oPrice:goodsObj.data.oPrice
    },
    infoImage:goodsObj.data.oGoodsIntro,
    oSize:goodsObj.data.oSize
   })

  },
  handlePrevewImage(e){
    // const urls=this.GoodsInfo.map(v=>v.oUrl);
    // const current=e.currentTarget.dataset.url
    // console.log(current);
    // wx.previewImage({
    //   urls: urls,
    //   current: current,
    //   showmenu: true,
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id}=options;
    this.setData({
      language:wx.getStorageSync('language'),
      goodsId:goods_id
    })
    this.getGoodsDetail(goods_id);
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