import{request} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    isFocus:false,
    inputValue:"",
    SearchGoodsList:[]
  },
  handleInput(e){
    const {value}=e.detail;
    let data={key:value}
   if(!value.trim()){
    clearTimeout(this.TimeId)
    this.setData({
      goods:[],
      isFocus:false
    })
    return;
   }
   this.setData({
      isFocus:true,
  })
   clearTimeout(this.TimeId)
   this.TimeId=setTimeout(()=>{
    this.qsearch(data)
   },1500);
  },
  handleClear(){
    this.setData({
      inputValue:"",
      isFocus:false,
      goods:[],
      SearchGoodsList:[]
    })
  },

  async qsearch(query){
    const res=await request({url:"/search",method:'POST',data:query});
    this.setData({
      SearchGoodsList:res.data
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  
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