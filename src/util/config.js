export default config => {
  let con = {
    //----------map---------------宝鸡
    defaultLongitude: "107.235982",
    defaultLatitude: "34.360620",
    //----------afterspeak---------------
    beforPosChosed: '点击选取地图坐标',
    afterPosChosed: '点击重新选取坐标',
    howLong: '1',
    allowedCities: ['宝鸡市', '汉中市'],
    howMany: '50',
    unlimitNo: false,

    //----------beforespeak---------------
    readyToRecord: "准备说：",
    buttonTip: "请长按录音...",
    recording: "正在录音...",
    canceled: "已取消!",
    waitAWhile: "请稍后...",
    cancelRecording: "向上滑动松开 取消录音"
  }
  return con
}
