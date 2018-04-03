 import Tools from './tools';
 // -------------MAP----------------------
 function locate(coordinates, _this) {
   console.log('request.locate : 请求坐标为 [' + coordinates.longitude + ',' + coordinates.latitude + '] 周围的敢说');
   wx.request({
     url: Tools.formatUrl(_this.config.locateUrl, {
       longitude: coordinates.longitude,
       latitude: coordinates.latitude,
       maxDistance: 0.01
     }),
     header: {
       'authorization': _this.$parent.globalData.token
     },
     success(res) {
       //取得周围坐标 准备展示
       if (!res.error && res.data.tickets) {
         let tickets = res.data.tickets
         console.log('request.locate : 找到 [' + coordinates.longitude + ',' + coordinates.latitude + '] 周围的敢说 [' + tickets.length + '] 个');
         console.log(tickets);
         for (let i = 0; i < tickets.length; i++) {
           let t = {
             iconPath: "../assets/images/placeholder.png",
             id: i,
             ticketId: tickets[i].ticketId,
             longitude: tickets[i].ticketLocation[0],
             latitude: tickets[i].ticketLocation[1],
             width: 24,
             height: 24
           };
           _this.markers.push(t);
         }
         _this.$apply();
       }
     },
     fail(res) {
       console.log(res)
     }
   })
 }
 // ----------------------retrieveData----------------------------------------
 function retrieveData(_this , id, type, params, success_cb, fail_cb) {
   //request取得ticket所有数据
   console.log('request.retrieveData.' + type + ' : 请求 id 为 [' + id + '] 的内容');
   wx.request({
     url: Tools.formatUrl(_this.$parent.globalData.config.retrievers[type] + id, params), //首页数据
     header: {
       'authorization': _this.$parent.globalData.token
     },
     success(res) {

       if (res.data.error) {
         console.log('request.retrieveData.' + type + ' : 返回【失败】', res.data.error);
         fail_cb(res.data.error)
       } else {
         console.log('request.retrieveData.' + type + ' : 返回【成功】', res.data);
         success_cb(res.data)
       }
     },
     fail(res) {
       console.log('request.retrieveData.' + type + ' : 返回【失败】', res.data);
       fail_cb(res)
     }
   })
 }


 module.exports = {
   locate: locate,
   retrieveData: retrieveData
 }
