<template>
  <div>
    <div
      v-if="!info.isLogin"
      ripple
      class="userSidebar__title"
      on="tap:userLogin.login">
      <svg class="rt-svg-icon ">
        <use xlink:href="#usericon" />
      </svg>
      去登录
    </div>
    <div class="userSidebar__title">
      <div
        v-if="info.isLogin"
        class="avatar">
        <mip-img
          :src="info.userInfo.avatar"
          class="userImg"
          layout="responsive"
          width="100"
          height="100"/>
      </div>
      <span class="nickname">{{ info.userInfo.nickname }}</span>
    </div>
    <ul class="userSidebar__list">
      <li
        v-if="info.isLogin"
        ripple
        ripple-color="#89afd6"
        class="listItem">
        <a
          href="javascript:void(0)"
          @click="getOrderList" >
          <svg class="rt-svg-icon " >
            <use xlink:href="#order" />
          </svg>
          <span class="desc">订单中心</span>
        </a>
      </li>
      <div
        v-if="info.isLogin"
        on="tap:userLogin.logout">
        <li
          ripple
          ripple-color="#89afd6"
          class="listItem">
          <a href="javascript:void(0)" >
            <svg class="rt-svg-icon ">
              <use xlink:href="#loginOut" />
            </svg>
            <span class="desc">退出登录</span>
          </a>
        </li>
      </div>
    </ul>
  </div>
</template>
<style scoped>
.userImg {
  border-radius: 70%;
}
</style>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
      default: function () {
        return { userInfo: {} }
      }
    }
  },
  data () {
    return {
      orderUrl: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.orderUrl = this.info.userInfo.avatar
    }, 1000)
  },
  methods: {
    getOrderList: function () {
      window.MIP.viewer.open('./orderList.html?r=' + new Date().getTime(), {
        isMipLink: true
      })
    }
  }
}
</script>
