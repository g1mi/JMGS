export default config => {
  let con = {
    //----------map---------------宝鸡
    defaultLongitude: '107.235982',
    defaultLatitude: '34.360620',
    //----------afterspeak---------------
    beforPosChosed: '点击选取地图坐标',
    afterPosChosed: '点击重新选取坐标',
    howLong: '1',
    allowedCities: ['宝鸡市', '汉中市'],
    howMany: '50',
    howManyMax: '500',
    unlimitNo: false,

    //----------beforespeak---------------
    readyToRecord: '准备说：',
    buttonTip: '请长按录音...',
    recording: '正在录音...',
    canceled: '已取消!',
    waitAWhile: '请稍后...',
    cancelRecording: '向上滑动松开 取消录音',


    //----------application---------------
    checkLoginUrl: 'http://jmgs.viphk.ngrok.org/api/auth/checkLogin',

    locateUrl: 'http://jmgs.viphk.ngrok.org/api/location',
    loginUrl: 'http://jmgs.viphk.ngrok.org/login',
    bulltinInfoUrl: 'http://jmgs.viphk.ngrok.org/api/info',
    ticketTokenUrl: 'http://jmgs.viphk.ngrok.org/api/auth/ticket',
    challengeTokenUrl: 'http://jmgs.viphk.ngrok.org/api/auth/challenge',
    bucketUrl: 'http://p6lo0xc1f.bkt.clouddn.com/',
    bucketRegionUrl: 'http://upload-z2.qiniup.com',

    retrievers: {
      ticket: 'http://jmgs.viphk.ngrok.org/api/ticket/', // 加/， 用来组合url
      challenge: 'http://jmgs.viphk.ngrok.org/api/challenge/'
    },

    // locateUrl: 'https://jmgs.g1mi.cn/api/location',
    // checkLoginUrl: 'https://jmgs.g1mi.cn/api/auth/checkLogin',
    // loginUrl: 'https://jmgs.g1mi.cn/login',
    // bulltinInfoUrl: 'https://jmgs.g1mi.cn/api/info',
    // ticketTokenUrl: 'https://jmgs.g1mi.cn/api/auth/ticket',
    // challengeTokenUrl: 'https://jmgs.g1mi.cn/api/auth/challenge',
    // bucketUrl: 'https://cloud.jmgs.g1mi.cn/',
    // bucketRegionUrl: 'https://upload-z2.qiniup.com',

    // retrievers: {
    //   ticket: 'https://jmgs.g1mi.cn/api/ticket/', // 加/， 用来组合url
    //   challenge: 'https://jmgs.g1mi.cn/api/challenge/'
    // },

    //错误信息：
    showError: (code, content) => {
      if (content) {
        wx.showModal({
          title: con[code],
          content: JSON.stringify(content),
          showCancel: false,
        })
        return;
      }
      wx.showToast({
        title: con[code],
        icon: 'none'
      });
    },
    //map页
    Msg001: '登陆成功！',
    Err001: 'Err 001: 获取用户登录态失败~',
    Err002: 'Err 002: 获取用户信息失败~',
    Err003: 'Err 003: 登录失败~',
    Err004: 'Err 004: 获取用户信息失败~',
    Err101: 'Err 101：登录失败，未能连接到服务器~',
    Err102: 'Err 102：获取授权信息失败~',
    Err201: 'Err 201：获取展报信息失败~',
    Err301: 'Err 301：无法获取当前位置坐标~',
    Err302: 'Err 302: 服务器发生错误, 未能上传成功~',
    Err303: 'Err 303: 文件上传发生错误~',
    Err401: 'Err 401: 文件上传失败~',
    Err402: 'Err 402: 加载分页数据时出错~',
    Err403: 'Err 403：更新敢说时出现错误~',
    Err404: 'Err 404：文件上传失败~',
    Err405: 'Err 405：发布敢说时出现错误~',
    Wrn401: 'Wrn 401：视频录制已取消~',
  }
  return con
}
