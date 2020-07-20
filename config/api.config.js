let domain, mainDomain, swapsDomain
try {
  domain = 'lpmex.com' // 本地环境主域名
  mainDomain = 'http://localswap.lpmex.com' // 主站本地环境地址
  swapsDomain = 'http://localswap.lpmex.com' // 合约站本地环境地址
} catch (err) { }
export default {
  domain: domain,
  mainDomain: mainDomain,
  swapsDomain: swapsDomain,
  // swapsUrl: "/api", // 为了解决本地启动跨域问题，先用代理请求，具体配置在nuxt.config.js
  swapsUrl: "https://api.lpmex.com", // 部署上线时合约接口地址写这里
  webSocketUrl: "wss://api.lpmex.com/wsswap/realTime",
  // 如果是合约云则为true
  isYun: true
};
