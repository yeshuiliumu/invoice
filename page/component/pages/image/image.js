Page({
  clickMe: function () {
    wx.previewImage({
      current: 'https://www.xyliumu.cn/wxch/testzanshang.jpg', // 当前显示图片的http链接
      urls: ['https://www.xyliumu.cn/wxch/testzanshang.jpg', 'http://img.souutu.com/2016/0511/20160511055648316.jpg'] ,// 需要预览的图片http链接列表
      success :function(){
        console.log("123");
      },
      fail:function(){
        console.log("321");
      }
    });
  }
})
