 import Tools from './tools';
 // -------------MAP----------------------
function locate(res, _this) {
  wx.request({
    url: Tools.formatUrl(_this.config.locateUrl, {
      longitude: res.longitude,
      latitude: res.latitude,
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
        console.log('准备添加marker [' + tickets.length + '] ')
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
  wx.request({
    url: Tools.formatUrl(_this.$parent.globalData.config.getTicketUrl + ticketId, {'page':page}), //首页数据
    header: {
      'authorization': _this.$parent.globalData.token
    },
    success(res) {
      if(res.error) {
        fail_cb(res.error)
      } else {
        success_cb(res.data)
      }
    },
    fail(res) {
      fail_cb(res)
    }
  })
}

module.exports = {
  locate: locate,
  display: display
}
