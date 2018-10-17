<template>
  <div class="wrapper" >
    <div v-if="sta">
      <div class="takeCode">
        <mip-img
          :src="codeUrl"
          layout="responsive"
          width="200"
          height="200"/>
      </div>
      <div class="order">
        <div class="orderTime">
          <span class="lef">自提订单：{{ id }} </span>
          <span class="rig">{{ getOrderTime }}</span>
        </div>
        <div
          v-for="orders in items"
          :key="orders"
          class="coffee-item">
          <span class="coffee-discribe">
            <span class="coffee-name">
              <div class="coffee-title">{{ orders.sku.product.name }}({{ orders.sku.spec }})</div>
            </span>
          </span>
          <span class="coffee-amount">&times;{{ orders.count }}</span>
          <span class="coffee-all-price">￥{{ orders.sku.priceCent/100 }}</span>
        </div>
        <div class="orderMon">
          <span class="lef">共{{ total }}件商品</span>
          <span class="rig">实付：￥{{ totalPrice }}</span>
        </div>
      </div>
    </div>
    <div
      v-if="!sta"
      class="orderError">
      <mip-showcase-icon
        class="abc mip-element mip-layout-container"
        type="waring"><svg class="rt-svg-icon"> <use xlink:href="#waring"/></svg></mip-showcase-icon>
      <span class="error">{{ msg }}</span>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  text-align: center;
  height: 100%;
  overflow-x: hidden;
}

.takeCode {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 60%;
  padding-bottom: 15px;
}
.order {
  padding-top: 20px;
}
.orderTime {
  display: flex;
  padding-bottom: 1em;
  border-bottom: 9.8px solid rgba(0, 0, 0, 0.03);
  color: #696969;
}

.lef {
  flex: 2;
  display: flex;
  margin-left: 3vw;
}
.rig {
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
}
.orderMon {
  display: flex;
  padding: 1em;
  border-top: 9.8px solid rgba(0, 0, 0, 0.03);
}
.orderMon .lef {
  position: relative;
  left: -1em;
}
.orderMon .rig {
  position: relative;
  right: -2em;
}
.coffee-item {
  display: flex;
  font-weight: 500;
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

.coffee-name {
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
}

.orderError {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.orderError .rt-svg-icon {
  width: 25px;
  height: 25px;
  color: #ff6600;
}

.orderError .error {
  padding: 13px;
  font-size: 18px;
  color: #ff6600;
}
</style>

<script>
export default {
  data() {
    return {
      codeUrl: "",
      createdAt: "",
      priceCent: 0,
      id: 0,
      items: [],
      total: 0,
      uri: "",
      sta: true,
      msg: "",
      time: null
    };
  },
  computed: {
    getOrderTime() {
      this.createdAt = Number(this.createdAt)
      let now = new Date(this.createdAt);
      let timeshow =
        now.getFullYear() +
        "-" +
        (now.getMonth() + 1) +
        "-" +
        now.getDate() +
        " " +
        now.getHours() +
        ":" +
        now.getMinutes();
      return timeshow;
    },
    totalPrice() {
      let total = 0;
      Array.prototype.forEach.call(this.items, item => {
        total += parseFloat(item.sku.priceCent * item.count / 100);
      });
      return total;
    }
  },
  mounted() {
    this.getPayCode();
    this.time = setInterval(() => {
      this.getStatus();
    }, 1000);
    window.addEventListener("hide-page", () => {
      clearInterval(this.time)
    });
  },
  methods: {
    getStatus() {
      fetch("api/order/" + this.getQueryString("orderId") + "/status", {
        method: "get",
        credentials: "include"
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          if (data.data.status === 60) {
            window.MIP.viewer.open("/", {
              isMipLink: true
            })
          }
        })
        .catch(err => console.log(err))
    },
    getQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
      let r = window.location.search.substr(1).match(reg)
      if (r != null) {
        return unescape(r[2])
      }
      return null;
    },
    getPayCode() {
      let self = this;
      fetch("api/order/" + this.getQueryString("orderId"), {
        method: "get",
        credentials: "include"
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          // window.MIP.viewer.open('./orderList.html?r=' + new Date().getTime(), {
          //   isMipLink: true
          if (data.status !== 0) {
            self.msg = "非法请求：请返回首页";
            self.sta = false;
          } else if (data.data.status !== 50) {
            self.msg = "非法请求：请返回首页";
            self.sta = false;
          } else {
            self.sta = true;
            let { priceCent, id, items, takeQcode, createdAt } = data.data;
            self.codeUrl = takeQcode;
            self.createdAt = createdAt;
            self.priceCent = priceCent;
            self.items = items;
            self.id = id;
            for (let cou of self.items) {
              self.total += cou.count;
            }
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    prerenderAllowed() {
      return true
    }
  }
};
</script>
