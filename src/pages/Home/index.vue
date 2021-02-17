<template>
  <div class="show-page">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>这是首页</h1>
    <div class="p-des">点击下方 tab 切换其他页面</div>
    <Tabbar :active="0"></Tabbar>
  </div>
</template>

<script>
import RequestApi from '@/services'
import Tabbar from '@/components/Tabbar'
export default {
  components: {
    Tabbar
  },
  data() {
    return {
      data1: '这是data1'
    }
  },
  mounted() {
    // this.onTest1()
  },
  methods: {
    onTest1() {
      RequestApi.test.sendTest().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  .show-page{
    text-align: center;
  }
  .test-box{
    height: 100px;
    width: 100px;
    background-color: $primary-color;
  }
  .p-des{
    margin-top: 30px;
  }
</style>