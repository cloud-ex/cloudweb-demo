let domain, mainDomain, swapsDomain
try {
  domain = 'lpmex.com' // 测试环境主域名
  mainDomain = 'https://www.lpmex.com' // 主站测试环境网址
  swapsDomain = 'https://swap.lpmex.com' // 合约站测试环境网址
} catch (err) { }
export default {
  domain: domain,
  mainDomain: mainDomain,
  swapsDomain: swapsDomain,
  baseUrl: 'https://api.lpmex.com/', // 主站测试环境api
  swapsUrl: 'https://api.lpmex.com/', // 合约站测试环境api
  webSocketUrl: 'wss://api.lpmex.com/wsswap/realTime', // 合约站websocket地址
  // 如果是合约云则为true
  isYun: true
};
