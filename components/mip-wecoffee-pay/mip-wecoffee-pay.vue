<template>
  <div class="wrapper">
    <div v-if="sta">
      <div class="exprieTime">
        请在 <span class="sec">{{ limTime }}</span> 内完成支付，过时订单交自动取消
      </div>
      <div class="top">订单信息</div>
      <div class="coffee-contain">
        <div v-for="item in goodsdata" :key="item.id" class="coffee-item">
          <span class="coffee-discribe">
            <mip-img :src="item.sku.product.imageUri" class="coffee-img" layout="responsive" width="2vw" height="2vh" />
            <span class="coffee-name">
              <div class="coffee-title">{{ item.sku.product.name }}</div>
              <div class="coffee-options">{{ Object.values(JSON.parse(item.extra).spec).join('/').substring(0, 40)}}</div>
            </span>
          </span>
          <span class="coffee-amount">x{{ item.count }}</span>
          <span class="coffee-all-price">￥{{ item.sku.priceCent*item.count/100 }}</span>
        </div>
      </div>
      <div class="userinf">
        <div class="userinf-i">
          <span class="userfont">订单号</span>:<span class="userinf-r">{{ orderId }}</span>
        </div>
        <div class="userinf-i">
          <span class="userfont">商品总金额</span>:<span class='userinf-r' style="color:red">￥{{ totalPrice }}</span>
        </div>
        <div class="userinf-i">
          <span class="userfont">收货人</span>:<span class='userinf-r'>{{ userAddress.name }}</span>
        </div>
        <div class="userinf-i">
          <span class="userfont">电话</span>:<span class='userinf-r'>{{ userAddress.phoneNumber }}</span>
        </div>
      </div>
      <div ripple class="submitBtn flex-center" on="tap:payDialog.toggle">确定支付</div>
    </div>
    <div v-if="!sta" class="orderError">
      <mip-showcase-icon class="abc mip-element mip-layout-container" type="waring"><svg class="rt-svg-icon">
          <use xlink:href="#waring" /></svg></mip-showcase-icon>
      <span class="error">{{ msg }}</span>
    </div>

  </div>
</template>

<style scoped>
  .wrapper {
    margin: 0 auto;
    /* text-align: center; */
    height: 100%;
  }

  .orderError {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }

  .exprieTime {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.2vw;
    height: 10vw;
    background-color: #ebf2f8;
    color: #666666;
  }

  .userinf {
    padding: 1em;
    margin-top: 5px;
    border-top: 10px solid rgba(0, 0, 0, 0.08)
  }

  .userinf-r {
    padding-left: 20px;
  }

  .userfont {
    text-align: justify;
    padding-right: 5px;
    width: 80px;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    opacity: 0.8;
    color: darkgray;
  }

  .userfont::after {
    content: "";
    display: inline-block;
    width: 100%;
    overflow: hidden;
    height: 0;
  }

  .footer {
    display: flex;
    background: #fff;
    margin-top: 10px;
    padding: 5px;
    justify-content: space-around;
  }

  .pay {
    position: absolute;
    top: 50px;
  }

  .coffee-contain {
    background-color: #fff;
    padding: 0 4vw;
    font-size: 4vw;
    /* margin-top: 12px; */
  }

  .coffee-contain div:last-child {
    border-bottom: 0;
  }

  .coffee-item {
    display: flex;
    border-bottom: 0.7px solid rgba(0, 0, 0, 0.08);
  }

  .coffee-discribe {
    flex: 5;
    display: flex;
    margin: 2vh 0;
  }

  .coffee-price {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .coffee-amount {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.2vw;
    opacity: 0.7;
  }

  .coffee-all-price {
    flex: 1;
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .coffee-img {
    width: 16vw;
    min-width: 16vw;
    max-height: 16vw;
  }

  .coffee-name {
    margin-left: 3vw;
    /* line-height: 10vw; */
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
  }

  .coffee-title {
    font-size: 3.7vw;
    margin-bottom: 0.25px;
    text-align: left;
  }

  .coffee-options {
    font-size: 3.2vw;
    opacity: 0.5;
    text-align: left;
  }

  .top {
    text-align: left;
    margin: 6px 0px 0px 13px;
    opacity: 0.7;
  }
</style>

<script>
  import {
    format
  } from '../../common/util.js'

  export default {
    firstInviewCallback() {
      const self = this
      self.$on('getOrder', function (e) {
        MIP.setData({
          payConfig: {
            sessionId: e.sessionId
          }
        })
        self.getOrder()
      })
    },
    props: {
      payConfig: {
        type: Object,
        default () {
          return {}
        }
      },
      info: {
        type: Object,
        required: true,
        default: function () {
          return {
            userInfo: {}
          }
        }
      }
    },
    data() {
      return {
        goodsdata: {},
        orderTotal: 0,
        extime: 0,
        userAddress: {},
        msg: '',
        orderId: 0,
        sesId: '',
        sta: true
      }
    },
    computed: {
      totalPrice() {
        let total = 0
        Array.prototype.forEach.call(this.goodsdata, item => {
          total += parseFloat(item.sku.priceCent * item.count / 100)
        })
        return total
      },
      limTime() {
        return format(this.extime)
      }
    },
    mounted() {
      MIP.setData({
        payConfig: {
          postData: {
            orderId: this.getOrderId()
          }
        }
      })
    },
    methods: {
      getOrder() {
        let self = this
        fetch('/api/order/' + this.getOrderId(), {
            method: 'get',
            credentials: 'include'
          })
          .then(function (res) {
            return res.json()
          })
          .then(function (data) {
            if (data.status !== 0) {
              self.msg = '订单获取失败'
              self.sta = !self.sta
            } else if (+data.data.status !== 10) {
              self.msg = '订单已支付'
              self.sta = !self.sta
            } else if (+data.data.exprieTime <= 0) {
              self.msg = '订单已过期'
              self.sta = !self.sta
            } else {
              self.orderId = data.data.id
              self.goodsdata = data.data.items
              self.userAddress = data.data.address
              self.extime = data.data.exprieTime
              self.updataTime()
              MIP.setData({
                payConfig: {
                  fee: self.totalPrice
                }
              })
            }
          })
          .catch(error => {
            console.log(error)
          })
      },
      getOrderId() {
        return this.getQueryString('orderId')
      },
      getQueryString(name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        let r = window.location.search.substr(1).match(reg)
        if (r != null) {
          return unescape(r[2])
        }
        return null
      },
      updataTime() {
        if (!--this.extime) {
          this.getOrderList()
        }
        setTimeout(() => {
          this.updataTime()
        }, 1000)
      },
      getOrderList() {
        window.MIP.viewer.open('./orderList.html?r=' + new Date().getTime(), {
          isMipLink: true
        })
      }
    },
    prerenderAllowed() {
      return true
    }
  }
</script>