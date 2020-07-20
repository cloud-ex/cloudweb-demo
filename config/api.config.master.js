let domain, mainDomain, swapsDomain
try {
  domain = 'lpmex.com' // 生产环境主域名
  mainDomain = 'https://www.lpmex.com' // 主站成产环境网址
  swapsDomain = 'https://swap.lpmex.com' // 合约站生产环境网站
} catch (err) { }
export default {
  domain: domain,
  mainDomain: mainDomain,
  swapsDomain: swapsDomain,
  baseUrl: 'https://api.lpmex.com/', // 主站生产环境api
  swapsUrl: 'https://api.lpmex.com/', // 合约站生产环境api
  webSocketUrl: 'wss://api.lpmex.com/wsswap/realTime', // 合约站生产环境websocket地址
  // 如果是合约云则为true
  isYun: true
};
