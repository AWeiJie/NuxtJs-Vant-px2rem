import Vue from 'vue'

// //全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
export const realImg = Vue.directive('real-img', {
  bind: (el, binding) => {
    /**
     * 检测图片是否存在
     * @param url
     */
    const imageIsExist = url =>
      new Promise(resolve => {
        let img = new Image()
        img.onload = () => {
          if (this.complete === true) {
            resolve(true)
            img = null
          }
        }
        img.onerror = () => {
          resolve(false)
          img = null
        }
        img.src = url
      })

    const imgURL = binding.value // 获取图片地址
    if (imgURL) {
      imageIsExist(imgURL).then(res => {
        if (res) {
          el.setAttribute('src', imgURL)
        } else {
          el.setAttribute(
            'src',
            'https://static.jingzhuan.cn/pc/guide/cover.png'
          )
        }
      })
    } else {
      el.setAttribute('src', 'https://static.jingzhuan.cn/pc/guide/cover.png')
    }
  }
})
