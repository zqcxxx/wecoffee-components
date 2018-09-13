<template>
  <div class="wrapper">
    <div
      v-for="items in orderLists"
      :key="items"
      class="orderList">
      <li class="orderListItem">
        <div class="box_hd orderHeader">
          <span class="orderNum">订单号：
            <i>{{ items.id }}</i>
          </span>
          <span
            class="status ">{{ items.orderType }}</span>
          <span
            :class="'status status_'+items.statusNum"
            @click="goPayCode(items.statusNum,items.id,items.orderType)">
            {{ items.status }}
          </span>
        </div>
        <div class="box_header orderHeader">
          <span class="price">总价:
            <i class="co_red">{{ items.price }}</i>
          </span>
          <span class="timeshow">
            <a
              v-if="items.isPay"
              :href="items.payLink"
              :data-sf-href="items.payLink"
              class="goPay"
              data-sf-options="{&quot;title&quot;:{&quot;html&quot;:&quot;支付中心&quot;}}"
              data-type="mip">去支付</a>{{ items.timeshow }}
          </span>
        </div>
        <div
          v-for="goods in items.products"
          :key="goods"
          class="productList">
          <div class="productItem">
            <mip-img
              :src="goods.cover"
              class="cover"
              layout="responsive"
              width="20vw"
              height="20vw">
              <mip-showcase-icon
                class="img-placeholder"
                type="weeLogo" />
            </mip-img>
            <div class="goodsinfo">
              <div class="name">{{ goods.name }}</div>
              <div class="price">价格：{{ goods.price }}</div>
              <div class="price">{{ goods.count }}杯 {{ goods.spec }}</div>
            </div>
          </div>
        </div>
      </li>
    </div>
    <div
      class="btn-more"
      @click="getMore">
      {{ message }}
    </div>
  </div>

</template>

<style scoped>
.wrapper {
  overflow-y:scroll;
  margin-top: -2px;
}
div,
span,
img {
  -webkit-tap-highlight-color: transparent;
}

.btn-more {
  display: flex;
  justify-content: center;
  align-content: center;
  line-height: 3.2em;
  height: 3.2em;
}

body {
  background-color: #fff;
}

.co_red {
  color: #e4393c;
}

.orderfooter {
  height: 13.6vw;
}

.orderListItem {
  /* padding: 10px; */
  border-bottom: 2.6vw solid #e8e8ed;
  font-size: 3.2vw;
}

.orderListItem i {
  font-style: normal;
}

.orderHeader {
  border-bottom: 0.7px solid rgba(0, 0, 0, 0.08);
  padding: 3vw;
}

.orderHeader .goPay {
  margin-left: 10px;
  border: 1px solid;
  padding: 3px 13px;
  border-radius: 5px;
  border-color: #f44336;
  color: #f44336;
  margin-bottom: 3px;
}

.orderListItem .box_hd {
  display: flex;
  align-items: center;
  font-size: 3.8vw;
}

.orderListItem .box_hd .orderNum {
  color: #999;
  flex: 1;
}

.orderListItem .box_hd .orderNum i {
  color: #333;
}

.orderList {
  /* margin-top: 30px; */
  border-top: 1px solid #dcdcdc;
  list-style: none;
}

/* status: ({10:'等待支付', 20: '已支付', 30:'未取', 40:'已取', 50: '运送中', 60:'已送达' })[order.status], */

.box_hd .status {
  font-size: 3.2vw;
  color: rgba(0, 0, 0, 0.65);
  padding: 1.2vw 1vw;
  line-height: 1;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background: #fafafa;
  white-space: nowrap;
  margin-left: 2.6vw;
}

.box_hd .status_10 {
  color: #eb2f96;
  background: #fff0f6;
  border-color: #ffadd2;
}

.box_hd .status_20 {
  color: #1890ff;
  background: #e6f7ff;
  border-color: #91d5ff;
}

.box_hd .status_30 {
  color: #fa541c;
  background: #fff2e8;
  border-color: #ffbb96;
}

.box_hd .status_40 {
  color: #13c2c2;
  background: #e6fffb;
  border-color: #87e8de;
}

.box_hd .status_50 {
  color: #52c41a;
  background: #f6ffed;
  border-color: #b7eb8f;
}

.box_hd .status_60 {
  color: #722ed1;
  background: #f9f0ff;
  border-color: #d3adf7;
}

.box_header {
  display: flex;
}

.box_header .price {
  flex: 1;
}

.box_header .timeshow {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #c8c8c8;
}

.productList {
  padding: 3vw;
}

.productItem {
  display: flex;
  margin-bottom: 2.6vw;
}

.productItem .cover {
  margin-right: 2.6vw;
  background-size: cover;
  width: 20vw;
  height: 20vw;
  background-color: #f3f3f3;
}

.goodsinfo {
  color: #999;
}

.goodsinfo .name {
  color: #333;
  font-size: 3.2vw;
  font-weight: bold;
}

.mip-wecoffee-infinitescroll-loading,
.mip-wecoffee-infinitescroll-loading {
  padding: 10vw;
  text-align: center;
  color: #999;
}

.rt-order {
  padding-top: 40px;
}
</style>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      isPay: true,
      goodsData: [],
      orderLists: [],
      renderLists: [],
      pn: 1,
      pg: 10,
      message: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.sessionId = this.info.sessionId
      this.getOrderLists()
      this.message = '点击加载更多'
    }, 200)
  },
  methods: {
    goPayCode (status, id, type) {
      if (status === 50 && (type === '现场点单')) {
        window.MIP.viewer.open('./orderTake.html?orderId=' + id + '&r=' + new Date().getTime(), {
          isMipLink: true
        })
      }
    },
    getMore () {
      ++this.pn
      this.getOrderLists()
    },
    getOrderLists () {
      let self = this
      let url = '/api/orders/' + this.pn + '/' + this.pg
      fetchJsonp(url, {
        jsonpCallback: 'callback',
        timeout: 5000
      })
        .then(res => {
          return res.json()
        })
        .then(data => {
          if (data && parseInt(data.status, 10) === 0 && data.data.orders.length !== 0) {
            data.data['orders'].map(function (order, idx) {
              let now = new Date(order.createdAt)
              let temData = {
                id: order.id,
                price: order.priceCent / 100,
                timeshow:
                  now.getFullYear() +
                  '-' +
                  (now.getMonth() + 1) +
                  '-' +
                  now.getDate() +
                  ' ' +
                  now.getHours() +
                  ':' +
                  now.getMinutes(),
                idx: idx,
                status: {
                  10: '等待支付',
                  20: '已支付',
                  30: '商家已接单',
                  40: '制作中',
                  50: order.orderType === 2 ? '去取单' : '运送中',
                  60: order.orderType === 2 ? '已取单' : '已送达'
                }[order.status],
                statusNum: order.status,
                orderType: +order.orderType === 2 ? '现场点单' : '远程点单',
                isPay: true,
                isOrder: true
              }
              temData.products = order.items.map(function (item) {
                let product = item.sku.product
                let specs = JSON.parse(item.extra).spec
                let itemspec = Object.values(specs).join('/').substring(0, 40)

                return {
                  cover: product.imageUri,
                  name: product.name,
                  spec: itemspec,
                  count: item.count,
                  price: item.sku.priceCent / 100
                }
              })
              if (order.status === 10 && order.exprieTime > 0) {
                temData.isPay = true
              } else {
                temData.isPay = false
              }
              if (+order.status === 10) {
                if (+order.exprieTime > 0) {
                  temData.payLink = '/orderPay.html?orderId=' + order.id
                } else {
                  temData.status = '订单取消'
                  temData.statusNum = -1
                }
              }
              if (order.orderType !== 2) {
                temData.isOrder = false
              }
              order.temData = temData
              self.orderLists.push(temData)
            })
          } else {
            self.message = '没有更多订单'
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
