<!-- 页面头部公用 -->
<template>
  <div class="topbar">
    <van-image width="153" height="23" :src="require('@/assets/images/biglogo.png')" />
    <!--右侧为登录文字跳转或者头像+信息图标-->
    <div class="right_change">
      <a @click="onLogin">登录/注册</a>
    </div>
    <van-icon name="chat-o" badge="2" color="#8A8B9D" @click="onMgs" class="news" size="25" />
    <div class="right_change" @click="onMy">
      <van-image width="30" height="30" :src="require('@/assets/images/headportrait.png')" />
    </div>
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
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'SubButton',
  props: {
    text: String,
    background_color: {
      type: String,
      default: 'rgb(158,223,215)',
    },
    color: {
      type: String,
      default: '#fff',
    },
    font_weight: {
      type: String,
      default: 'bold',
    },
    border_color: {
      type: String,
      default: 'transparent',
    },
  },
  setup(props, context) {
    const submmit = () => {
      context.emit('sub')
    }

    const router = useRouter()
    /**点击查看登录**/
    const onLogin = () => {
      router.push({ path: '/login' })
    }
    /**点击查看信息**/
    const onMgs = () => {
      router.push({ path: '/inform' })
    }
    /**点击查看我的主页**/
    const onMy = () => {
      router.push({ path: '/my' })
    }
    return {
      submmit,
      onLogin,
      onMgs,
      onMy,
    }
  },
})
</script>
<style scoped lang="less">
.topbar {
  padding: 0 30px;
  height: 95px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: #fff;
  .right_change {
    font-size: 30px;
    flex: 1;
    text-align: right;
    a {
      color: #06152a;
      font-weight: bold;
    }
  }
  .news {
    position: absolute;
    top: 20px;
    right: 130px;
  }
}
</style>