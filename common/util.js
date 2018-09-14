export const format =  (time) => {
    let day = Math.floor(time / (3600 * 24))
    let hour = Math.floor((time - day * 3600 * 24) / 3600)
    let minutes = Math.floor((time - day * 3600 * 24 - hour * 3600) / 60)
    minutes < 10 ? (minutes = '0' + minutes) : minutes
    let second = Math.floor(
      time - day * 3600 * 24 - hour * 3600 - minutes * 60
    )
    second < 10 ? (second = '0' + second) : second
    let msg = ''
    if (day !== 0) {
      msg += day + '天' + hour + '时' + minutes + '分' + second + '秒'
    } else if (hour !== 0) {
      msg += hour + '时' + minutes + '分' + second + '秒'
    } else if (minutes !== 0) {
      msg += minutes + '分' + second + '秒'
    } else if (second !== 0) {
      msg += second + '秒'
    }
    return msg
  }
  