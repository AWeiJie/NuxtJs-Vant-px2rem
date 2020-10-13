<template>
  <div>
    <nuxt keep-alive :keep-alive-props="{ include: ['shop'] }" />
    <div class="cu-bar tabbar bg-white shadow foot d-tabbar">
      <div class="action" @click="NavChange('shopping')" data-index="0">
        <div class="cuIcon-cu-image">
          <img
            :src="
              '/nuxt_img/' + [PageCur == 'shopping' ? '5m2x' : '1m3x'] + '.png'
            "
          />
        </div>
        <div :class="PageCur == 'shopping' ? 'text-red' : 'text-gray'">
          首页
        </div>
      </div>
      <div class="action" @click="NavChange('message')" data-index="1">
        <div class="cuIcon-cu-image">
          <img
            :src="
              '/nuxt_img/' +
                [PageCur == 'message' ? 'icon-message-red' : 'icon-message'] +
                '.png'
            "
          />
          <!-- <div class="cu-tag badge" v-if="massageNum && userData.hasLogin"> -->
          <!-- <div class="cu-tag badge">99+</div> -->
          <!-- <block v-else-if="massageNum > 999">999+</block> -->
          <!-- <block v-else>{{massageNum}}</block> -->
          <!-- {{ massageNum > 99 ? (massageNum < 999 ? '99+' : '999+') : massageNum }}
          </div>-->
        </div>
        <div :class="PageCur == 'message' ? 'text-red' : 'text-gray'">消息</div>
      </div>
      <div class="action" @click="toMP">
        <div class="cuIcon-cu-image">
          <img
            src="https://image.v1.vodeshop.com/FjkJ4iKktfLteJ9e8bTO_-1n0q-a"
          />
        </div>
        <div class="text-gray text-middle">直播</div>
      </div>
      <div class="action" @click="NavChange('shopcar')" data-index="2">
        <div class="cuIcon-cu-image">
          <img
            :src="
              '/nuxt_img/' + [PageCur == 'shopcar' ? '03m2x' : '02m2x'] + '.png'
            "
          />
        </div>
        <div
          :class="
            PageCur == 'shopcar'
              ? 'text-red text-middle'
              : 'text-gray text-middle'
          "
          style="padding-left:10upx;"
        >
          购物车
        </div>
      </div>

      <div class="action" @click="NavChange('mine')" id="sss" data-index="3">
        <div class="cuIcon-cu-image">
          <img
            :src="'/nuxt_img/' + [PageCur == 'mine' ? '8m2x' : '4m2x'] + '.png'"
          />
        </div>
        <div :class="PageCur == 'mine' ? 'text-red' : 'text-gray'">我的</div>
      </div>
    </div>
    <!-- <van-number-keyboard safe-area-inset-bottom /> -->
  </div>
</template>

<script>
// import $utils from "~/common/utils/utils.js";

export default {
  data() {
    return {
      PageCur: 'shopping',
      massageNum: '66'
    }
  },
  watch: {},
  created() {
    // const path = this.$route.path;
    // this.checkPageCur(path);
  },
  methods: {
    // 点击底部tabbar切换
    NavChange(page) {
      this.PageCur = page
      if (this.PageCur == 'shopping') {
        this.$router.push('/')
      } else {
        // $utils.redirectToLogin("/pages/shop/index/index", { PageCur: page });
      }

      // checkPageCur(path) {
      //   if (path == "/shop/my" || path == "/shop/my/") {
      //     this.PageCur = "mine";
      //   } else if (path == "/shop/shopcar" || path == "/shop/shopcar/") {
      //     this.PageCur = "shopcar";
      //   } else if (path == "/shop/message" || path == "/shop/message/") {
      //     this.PageCur = "message";
      //   } else {
      //     this.PageCur = "shopping";
      //   }
      // },
    },

    toMP() {
      this.$toast('您好，请前往小程序或App操作~')
    }
  }
}
</script>

<style lang="scss" scoped>
/* ==================
         商城底层的tabbar
 ==================== */

.d-tabbar {
  view {
    font-size: 20px;
    line-height: 1em;
  }

  .cu-tag {
    left: 60px;
    right: auto;
    &.badge {
      line-height: 28px;
    }
  }
}
.cuIcon-cu-image {
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
