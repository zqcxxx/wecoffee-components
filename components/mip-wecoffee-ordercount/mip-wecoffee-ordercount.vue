<template>
    <div v-show="count" class="ordercount" data-class="showorder">{{ count }}</div>
</template>

<style scoped>
.ordercount {
  position: absolute;
  right: -2.5em;
  top: -2.5em;
  line-height: 1;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 3.2vw;
  padding: 0.1vw 0.99vw;
  font-size: 3.2vw;
  border: 2px solid #fff;
}

[data-class="showorder"] {
    display: block;
    background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
}
</style>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  mounted () {
    this.$on('getcount', this.getCount)
  },
  methods: {
    getCount() {
      fetch('/api/orders/count', {
        method: "get",
        credentials: "include"
      })
        .then(res => {
          return res.json()
        })
        .then(data => {
          this.count = data.data.count
          console.log(data.data.count)
        })
        .catch(e => {
          throw new Error(e)
        })
    }
  }
}
</script>
