let ajaxtImes=0;
export const request=(params)=>{
  ajaxtImes++;
  wx.showLoading({
    title: '加载中',
    mask: true,
    success: (res) => {},
    fail: (res) => {},
  })
  return new Promise((resolve,reject)=>{
    const baseUrl='https://wechat.xcx.santic.com/mini'
      wx.request({
        ...params,
        url:baseUrl+params.url,
        header: {
          'Cookie': wx.getStorageSync('sessionid')||[]
        },
        success:(result)=>{
          resolve(result);
        },
        fail:(err)=>{
          reject(err);
        },
        complete: () => {
          ajaxtImes--;
          if(ajaxtImes===0){
          wx.hideLoading();
        }
        },
});
  })
}