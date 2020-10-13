<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      404
      页面不存在
      </h1>
    <h1 v-if="error.statusCode === 4004">
      {{error.code}}
      {{error.msg}}
    </h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  layout:'error',
  props: ['error'],
  asyncData({redirect}) {
    console.log('xxx');
    
    return redirect(301, '/')
  },
  // middleware: [
//   function({ redirect }) {
//     console.log('test');
    
//     return redirect(301, '/')
//   },
// ],
}
</script>
