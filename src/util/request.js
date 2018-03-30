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
        let i = 0;
        let tickets = res.data.tickets
        console.log('request.locate : 找到 [' + coordinates.longitude + ',' + coordinates.latitude + '] 周围的敢说 [' + tickets.length + '] 个');
        console.log(tickets);
        tickets.forEach(ticket => {
          let t = {
            iconPath: "../assets/images/placeholder.png",
            id: i++,
            ticketId: ticket.ticketId,
            longitude: ticket.ticketLocation[0],
            latitude: ticket.ticketLocation[1],
            width: 24,
            height: 24
          };
          _this.markers.push(t);
        });
        _this.$apply();
      }
    },
    fail(res) {
      console.log(res)
    }
  })
}
 // -------------DISPLAY----------------------
function display(_this, ticketId, page, success_cb, fail_cb) {
  //request取得ticket所有数据
  console.log('request.display : 请求 ticketId 为 [' + ticketId + '] 的内容');
  wx.request({
    url: Tools.formatUrl(_this.$parent.globalData.config.getTicketUrl + ticketId, {'page':page}), //首页数据
    header: {
      'authorization': _this.$parent.globalData.token
    },
    success(res) {

      if(res.data.error) {
        console.log('request.display : 返回【失败】',res.data.error);
        fail_cb(res.data.error)
      } else {
        console.log('request.display : 返回【成功】',res.data);
        success_cb(res.data)
      }
    },
    fail(res) {
      console.log('request.display : 返回【失败】',res.data);
      fail_cb(res)
    }
  })
}

module.exports = {
  locate: locate,
  display: display
}
