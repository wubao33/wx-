// pages/search_sort/search_sort.js
import{request} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    SortGoodsList:[],
    language:''
  },
  

  async qsearch(query){
    const res=await request({url:"/list",method:'POST',data:query});
    this.setData({
      SortGoodsList:res.data
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id==undefined){
    
    }else{
      const data={subId:options.id}
      this.qsearch(data)
    }
    this.setData({
      language:wx.getStorageSync('language'),
    })
  
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