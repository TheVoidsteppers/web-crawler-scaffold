
const { sleep } = require('../utils')

const request = require('request')

class Crawler {
  constructor() {
  }

  // 发送 Get 请求
  triggerGet({ url, headers }) {
    return new Promise((resolve, reject) => {
      const parmas = {
        method: 'get',
        uri: url
      }

      if (headers) {
        parmas.headers = headers
      }

      request(parmas,
        function (error, res, body) {
          if (error) {
            reject(error)
          }
          resolve({ res, body })
        })
    })
  }

  // 发送 Post 请求
  triggerPost({ url, headers, formData }) {
    return new Promise((resolve, reject) => {
      const options = {
        method: "POST",
        uri: url
      };

      if (headers) {
        options.headers = headers
      }

      if (formData) {
        options.body = querystring.stringify(formData)
      }

      request(options, function (err, res, body) {
        if (error) {
          reject(error)
        }
        resolve({ res, body })
      });
    })
  }

  // 休眠
  sleep(time) {
    return sleep(time)
  }

}

module.exports = Crawler