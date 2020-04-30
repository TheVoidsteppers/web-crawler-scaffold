const { sleep } = require('../utils');
const request = require('request');
const jar = request.jar();
const cheerio = require('cheerio');

class Crawler {
  constructor() {
  }

  // 发送 Get 请求
  triggerGet(query) {
    return new Promise((resolve, reject) => {
      const parmas = {
        method: 'get',
        ...query,
        jar
      };

      request(parmas,
        function (error, res, body) {
          if (error) {
            reject(error)
          };
          const $ = cheerio.load(body.toString());
          resolve({ res, body, $ });
        })
    })
  }

  // 发送 Post 请求
  triggerPost(parmas) {
    return new Promise((resolve, reject) => {

      const options = {
        method: "POST",
        ...parmas,
        jar
      };


      request(options, function (error, res, body) {
        if (error) {
          reject(error)
        }
        const $ = cheerio.load(body.toString());
        resolve({ res, body, $ });
      })
    })
  }

  // 休眠
  sleep(time) {
    return sleep(time);
  }

}

module.exports = Crawler