<template>
    <div class="guide-container">
        <h1 class="title">常见问题</h1>
        <div class="text-box">
            <h3>交易流程</h3>
            <p><span>1.永续合约是什么？</span></p>
            <p>永续合约是一种交易起来很像传统期货合约的衍生品。不同与传统期货合约，永续合约没有交割日期，通过资金费率来锚定指数价格。你可以阅读永续合约简介进一步了解永续合约。</p>
            <br />
            <p><span>2.标记价格是什么？</span></p>
            <p>标记价格即合理价格标记，是合约用来计算未实现盈亏和强制平仓的。反映了当前最合理的市场成交价。</p>
            <div class="formula">
              <p>标记价格=（1+资金费率基差率）*指数价格</p>
            </div>
            <p>详情可查看>>><a href="/information/guide/fair_price">合理价格</a></p>
            <p><span>3.TigerMEX 提供交易杠杆么？</span></p>
            <p>是的，TigerMEX Swap上的合约产品通常是提供杠杆的。</p>
            <br />
            <p><span>4.TigerMEX Swap 提供多少倍杠杆?</span></p>
            <p>TigerMEX Swap 提供的杠杆因产品而不同。 杠杆是由 起始保证金和维持保证金 水平决定的。 它们决定了你开仓和保持仓位所需的最小资金。 杠杆并非一个固定的倍数，而是一个最小保证金要求。 你可以在此查看所有产品的最小起始保证金及维持保证金水平。</p>
            <br />
            <p><span>5.合约的手续费是多少？</span></p>
            <p>TigerMEX是鼓励普通用户和交易员提供流动性的。</p>
            <p>作为一个普通的交易员，在TigerMEX Swap中挂单成交将会获得合约价值的万分之2.5作为提供流动性奖励。对于提取流动性的用户会要求提供合约价值的万分之7.5的作为手续费。</p>
            <p>TigerMEX根据您的合约交易额划分您的合约交易手续费等级，并对不同等级推出了不同的手续费费率优惠。</p>
            <p class="last">详情可查看>>><a href="/information/guide/overview">合约交易费用</a></p>
            <br />
            <h3>资金费率</h3>
            <p><span>1、资金费率是什么？它的作用是什么？</span></p>
            <p>我们的永续合约，如 BTCUSD，其资金费用每隔一段时间在多仓和空仓的持有者之间进行交换。 在你的交易历史中，正数金额意味着你在此时段支付资金；负数金额意味着你收取资金。</p>
            <p>TigerMEX在其中不支付或收取任何资金费用。</p>
            <br />
            <p><span>2、为何上涨严重的时候，空方还要支付资金费率？</span></p>
            <p>资金费率与行情下跌和上涨没有多大关系，只于当前市场（TigerMEX内）多空双方相对于合理价格的情绪有关。例如，BTCUSD指数飙升，同时市场的情绪还有较多的交易员在看空后市，那么就有可能出现没有人做多而导致市场缺乏多头的情况。</p>
            <br />
            <p><span>3、为什么不取消资金费用呢，交易员之间对赌不可以吗？</span></p>
            <p>对赌需要有对手盘。例如市场情绪偏向于看多，需要做多的人会找不到对手盘而只能选择以高溢价的形式做多，在TigerMEX里调节多空的势力的形式就是资金费率。</p>
            <br />
            <p><span>4、能不能取消资金费用，用溢价的形式去做呢？</span></p>
            <p>溢价跟资金费率的本质思想一致，核心都是让其中一方付出较高成本，来维持多空平衡，只是表现形式不同而已。</p>
            <br />
            <p><span>5、资金费率对于交易的影响有多大？</span></p>
            <p>资金费率在短期内对交易员的持仓影响微乎其微或没有影响，只有超长期持仓用户才需要计算资金费率带来的收益和耗损 。</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'guide-faq',
  head() {
    return {
      title: '常见问题'
    }
  },
  layout: 'information'
}
</script>
<style lang="less" scoped>
@import "../../../assets/css/guide.less";
</style>
