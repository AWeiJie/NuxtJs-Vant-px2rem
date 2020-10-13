<template lang="html">
  <div class="loading-page" v-if="loading">
    <van-loading type="spinner" color="#e54d42" vertical>{{
      loadingTips
    }}</van-loading>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    loadingTips: ''
  }),
  methods: {
    start() {
      this.loading = true
      this.loadingTips = this.$store.state.loadingTips
    },
    finish() {
      this.loading = false
      // this.$store.commit('set_loadingTips', '加载中') // 加载完后默认恢复提示
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 999;

  .van-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48px;
    height: 48x;
    margin-left: -24px;
    margin-top: -24px;

    .van-loading__text {
      color: #e54d42;
      font-weight: bold;
    }
  }
}
</style>
