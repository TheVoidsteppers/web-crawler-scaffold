# web-crawler-scaffold

封装  request、cheerio ，用来当 node 爬虫的脚手架

## Installation

```shell
$ npm i -g npm
$ npm i --save web-crawler-scaffold
```

## In Node.js

```javascript
const Crawler = require(' web-crawler-scaffold')

const crawler = new Crawler()
```

## API

```javascript
 // 发送 Get 请求
crawler.triggerGet({ url, headers? })
// 发送 Post 请求
crawler.triggerPost({ url, headers?, formData? })
// 休眠
await crawler.sleep()
```

## todo

- [ ] 引入 cheerio，解析 html
- [ ]  代理ip
- [ ] 引入 Puppeteer ？

