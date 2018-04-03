export default class MockingData {
  static getBulletinInfo() {
    return `亲爱的顾客，你好！
    您是今天第101个敢说发起者。
    请注意发起的敢说及挑战均不得包含如下内容：
        🈲违法，
        🈲政治相关。
     想看看昨天的数据么？
    昨天有101位贤者发起敢说，
    昨天有101位英雄挑战敢说，
    本小程序各种功能正待丰富中，请各位静候佳音...`
  }
  static getTicketSponsor() {
    return 'NickName 水水水水水水水水水水水水水水水水'
  }

  static getTicketDetail() {
    const tickets = {
      ticketId: '11111',
      userId: 'unionId',
      audioURL: '',
      createTime: 'ms',
      deadline: 'ms',
      updateTime: 'ms',
      amountsLimit: '',
      location: {
        longitude: '',
        latitude: ''
      },
      challengeId: [
        'challengeId',
      ]
    }
    const challenge = {
      Id: '',
      ticketId: 'ticketId',
      userId: 'userId',
      CreateTime: '',
      PoserURL: '',
      VideoURL: ''
    }

    const users = {
      Id: 'unionId',
      unionId: 'unionId',
      Nickname: 'nickname',
      AvatarURL: '',
      ticketId: [
        'id1'
      ],
      challengeId: [
        'id1'
      ]
    }


    //Redis
    const marker = { //所有ticket当中now < deadline
      id: 'ticketLocation',
      location: {
        longitude: '',
        latitude: ''
      }
    }

    //用户图片昵称本地缓存

    //缓存内容图片 url name videoAddress
  }
}
