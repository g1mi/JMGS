import moment from "moment";
import "moment/locale/zh-cn";
// -------------MAP----------------------
function locate(coordinates, _this) {
  console.log('request.locate : 请求坐标为 [' + coordinates.longitude + ',' + coordinates.latitude + '] 周围的敢说');
  wx.request({
    url: formatUrl(_this.config.locateUrl, {
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
        console.info('request.locate : 找到 [' + coordinates.longitude + ',' + coordinates.latitude + '] 周围的敢说 [' + tickets.length + '] 个');
        console.info(tickets);
        for (let i = 0; i < tickets.length; i++) {
          let t = {
            iconPath: '../assets/images/placeholder.png',
            id: i,
            ticketId: tickets[i].ticketId,
            longitude: tickets[i].ticketLocation[0],
            latitude: tickets[i].ticketLocation[1],
            width: 24,
            height: 24
          };
          _this.markers.push(t);
          _this.$apply();
        }
      }
    },
    fail(res) {
      console.error(res)
    }
  })
}
// ----------------------retrieveData----------------------------------------
function retrieveData(_this, id, type, params, success_cb, fail_cb) {
  //request取得ticket所有数据
  console.info('request.retrieveData.' + type + ' : 请求 id 为 [' + id + '] 的内容');
  wx.request({
    url: formatUrl(_this.$parent.globalData.config.retrievers[type] + id, params), //首页数据
    header: {
      'authorization': _this.$parent.globalData.token
    },
    success(res) {

      if (res.data.error) {
        console.info('request.retrieveData.' + type + ' : 返回【失败】', res.data.error);
        fail_cb(res.data.error)
      } else {
        console.info('request.retrieveData.' + type + ' : 返回【成功】', res.data);
        success_cb(res.data)
      }
    },
    fail(res) {
      console.warn('request.retrieveData.' + type + ' : 返回【失败】', res.data);
      fail_cb(res)
    }
  })
}

function upload(filePath, success_cb, fail_cb, options, progress, params) {
  const url = options.region; // 华北
  const formData = {
    'token': options.token,
    'key': options.key
  };
  // 添加自定义变量
  for (const key in params) {
    formData[key] = params[key];
  };
  console.info('request.upload: 上传数据', formData);
  const uploadTask = wx.uploadFile({
    url: url,
    filePath: filePath,
    name: 'file',
    formData: formData,
    success: function (res) {
      try {
        if (res.data) {
          success_cb(res.data)
        }
      } catch (error) {
        fail_cb(error)
      }
    },
    fail: function (error) {
      console.error(error);
      fail_cb(error);
    }
  })

  uploadTask.onProgressUpdate((res) => {
    progress && progress(res)
  })
};

function formatUrl(url, params) {
  let p = '';
  if ('object' === typeof params) {
    let length = 0
    for (let key in params) {
      length++
    }
    for (let key in params) {
      p += key + '=' + params[key]
      if (--length > 0) {
        p += '&'
      }
    }
    return url + '?' + p;
  }
  return url;
};

function formatTime(milliseconds) {
  return moment(milliseconds).fromNow();
}

async function passLogin(_this, url, method, data) {
  return await new Promise(resolve => {
    wx.request({
      url: url,
      data: data,
      header: {
        'authorization': _this.$parent.globalData.token
      },
      success(res) {
        resolve(res.statusCode === 200);
      },
      fail() {
        resolve(false);
      }
    })
  });
}

module.exports = {
  upload: upload,
  locate: locate,
  retrieveData: retrieveData,
  formatUrl: formatUrl,
  formatTime: formatTime,
  passLogin: passLogin
}
