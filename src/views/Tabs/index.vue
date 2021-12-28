<!-- tabs页面 -->
<template>
  <div>
    <router-view></router-view>
    <van-tabbar
      route
      :safe-area-inset-bottom="true"
      :fixed="true"
      v-model="active"
      v-if="!route.meta.hiddenTab"
      active-color="#1CB19B"
      inactive-color="#000"
    >
      <van-tabbar-item replace to="/" icon="desktop-o">矿池</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="balance-o">交易</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="pending-payment">收益</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  defineComponent,
} from 'vue'
import { useRoute } from 'vue-router'
interface DataProps {}
export default defineComponent({
  setup() {
    const route = useRoute()
    console.log(route)

    return {
      active: 0,
      route,
    }
  },
})
</script>
<style scoped lang="less">
</style>