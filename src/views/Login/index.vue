<template>
  <div class="topimg">
    <van-image width="32" height="28" :src="require('@/assets/images/iconlogo.png')" />
    <p>登录</p>
  </div>
  <div class="login">
    <Form ref="form" :rules="rules">
      <InputFrom
        rt="close"
        v-model:value="form_data.number_number"
        placeholder="请输入手机号码/邮箱地址"
        class="btn"
        propName="number_number"
      />
      <InputFrom
        rt="close"
        v-model:value="form_data.password"
        placeholder="请输入密码"
        type="password"
        class="btn"
        propName="password"
      />

      <SubButton text="登 录" @sub="onSubmmit" class="btn" />

      <p class="forget-pwd btn" @click="onForgetPwd">忘记密码?</p>

      <SubButton
        text="没有账号立即注册"
        background_color="#fff"
        color="rgb(80,85,104)"
        font_weight="normal"
        border_color="rgb(116,210,195)"
        @click="onRegister"
      />
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ComputedRef, ref } from 'vue'
import { inputType, formDataType } from './types'
import InputFrom from '@/components/InputForm/index.vue'
import SubButton from '@/components/SubButton/index.vue'
import Form from '@/components/Form/index.vue'
import { isPhone, ruleType } from '@/util/validate'
import { useData } from './useHook'

export default defineComponent({
  name: 'Login',
  components: {
    InputFrom,
    SubButton,
    Form,
  },
  setup() {
    const { form, form_data, rules, onSubmmit, onForgetPwd, onRegister } =
      useData()

    return {
      form,
      form_data,
      rules,
      onSubmmit,
      onForgetPwd,
      onRegister,
    }
  },
})
</script>

<style scoped lang="less">
.login {
  box-sizing: border-box;
  padding: 50px 30px;
  .btn {
    margin-bottom: 30px;
  }
  .forget-pwd {
    font-size: 28px;
    text-align: right;
    color: rgb(61, 192, 174);
  }
}
.topimg {
  display: flex;
  padding: 50px 30px;
  justify-content: left;
  align-items: center;
  p {
    margin-left: 10px;
    font-weight: bold;
    font-size: 50px;
  }
}
</style>
