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
}
