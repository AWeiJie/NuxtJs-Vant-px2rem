<template>
  <div>
    首页
  </div>
</template>

<script>
import MallService from '~/service/MallService'

export default {
  // validate({ query, params, redirect }) {
  //   return true; // 如果参数有效
  // },
  name: 'shop',
  components: {},
  /**
   * TDK设置
   */
  head() {
    return {
      title: '艺创商城',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '描述描述'
        },
        {
          name: 'keywords',
          content: '各有所爱，共享商城，零售，供应商，智慧门店'
        }
      ]
    }
  },
  layout(context) {
    return 'shop'
  },
  async asyncData({ query, env }) {},

  data() {
    return {}
  },
  mounted() {
    // 发起请求
    // MallService.getUsersData({}).then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style lang="scss" scoped></style>
