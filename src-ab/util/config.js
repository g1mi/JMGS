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
    // locateUrl: 'http://jmgs.viphk.ngrok.org/api/location',
    // loginUrl: 'http://jmgs.viphk.ngrok.org/login',
    // bulltinInfoUrl: 'http://jmgs.viphk.ngrok.org/api/info',
    // ticketTokenUrl: 'http://jmgs.viphk.ngrok.org/api/auth/ticket',
    // challengeTokenUrl: 'http://jmgs.viphk.ngrok.org/api/auth/challenge',
    // bucketUrl: 'http://p6lo0xc1f.bkt.clouddn.com/',
    // bucketRegionUrl: 'http://up-z2.qbox.me',

    // retrievers: {
    //   ticket: 'http://jmgs.viphk.ngrok.org/api/ticket/', // 加/， 用来组合url
    //   challenge: 'http://jmgs.viphk.ngrok.org/api/challenge/'
    // },

    locateUrl: 'https://jmgs.g1mi.cn/api/location',
    loginUrl: 'https://jmgs.g1mi.cn/login',
    bulltinInfoUrl: 'https://jmgs.g1mi.cn/api/info',
    ticketTokenUrl: 'https://jmgs.g1mi.cn/api/auth/ticket',
    challengeTokenUrl: 'https://jmgs.g1mi.cn/api/auth/challenge',
    bucketUrl: 'https://cloud.jmgs.g1mi.cn/',
    bucketRegionUrl: 'https://upload-z2.qiniup.com',

    retrievers: {
      ticket: 'https://jmgs.g1mi.cn/api/ticket/', // 加/， 用来组合url
      challenge: 'https://jmgs.g1mi.cn/api/challenge/'
    },


  }
  return con
}
