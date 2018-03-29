export default class tools {
  static getEllipsis(str, length, form) {
    if ('string' === typeof str) {
      if (str.length === length) {
        return str
      }
      if (str.length > length) {
        return str.slice(0, Number(length)) + ' ' + form
      } else {
        throw new Error('getEllipsis(): inappropriate length')
      }
    } else {
      throw new Error('getEllipsis(): not a string')
    }
  }

  static formatUrl(url, params) {
    if('object' !== typeof params) {
      throw Error('type of params incorrect')
    }
    let p = ''
    let length = 0
    for(let key in params) {
      length++
    }
    for(let key in params) {
      p += key + '=' + params[key]
      if(--length > 0) {
        p += '&'
      }
    }
    return url + '?' + p
  }
}
