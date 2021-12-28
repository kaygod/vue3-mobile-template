<template>
  <div class="input">
    <!--左侧-->

    <span class="left-text" v-if="lt !== ''">
      {{ lt }}
    </span>

    <input class="content" v-bind="$attrs" :value="value" @input="onChange" />

    <div v-if="rt == 'timer'" @click="getCaptcha" class="right-sec captcah">
      {{ timerData.content }}
    </div>
    <div
      v-else-if="rt == 'close' && closeFlag"
      @click="clearValue"
      class="right-sec"
    >
      <van-icon name="close" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, inject } from "vue";
import { rightType, timerDataType } from "./types";
import { useTimerData, useCloseIcon, useValidate } from "./useHook";
import { getValidate, ruleType, validateResult } from "@/util/validate";

export default defineComponent({
  name: "InputForm",
  props: {
    lt: {
      type: String,
      default: "",
    },
    rt: String as PropType<rightType>,
    value: {
      type: String,
      default: "",
    },
    rule: Array as PropType<(ruleType | string)[]>,
    propName: {
      type: String,
      required: true,
    },
    onCaptcha: Function,
  },
  setup(props, context) {
    const onChange = (e: KeyboardEvent) => {
      const value = (e.target as HTMLInputElement).value;
      updateValue(value);
    };

    const updateValue = (value: string) => {
      context.emit("update:value", value);
    };

    const rules = inject<any>("rules");

    let rule = null;

    if (rules) {
      rule =
        typeof rules[props.propName] === "string"
          ? rules[props.propName]
          : rules[props.propName].value; //因为是computed类型,所以要使用value取值
    }

    //获取验证码相关逻辑
    const { timerData, getCaptcha } = useTimerData(props);

    //获取close图标相关逻辑
    const { closeFlag, clearValue } = useCloseIcon(updateValue, props);

    //执行校验逻辑
    useValidate(props, rule);

    return {
      timerData,
      closeFlag,
      clearValue,
      getCaptcha,
      onChange,
    };
  },
});
</script>

<style lang="less" scoped>
.input {
  height: 94px;
  line-height: 94px;
  background-color: rgb(249, 249, 251);
  border-radius: 36px;
  font-size: 32px;
  color: rgb(42, 39, 58);
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  .content {
    display: inline-block;
    outline: none;
    border: none;
    flex: 1;
    height: 100%;
    line-height: 94px;
    font-size: 32px;
    color: rgb(41, 38, 55);
    background-color: transparent;
    width: 0;
  }
  .right-sec {
    display: inline-block;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .captcah {
    font-size: 24px;
    color: rgb(64, 193, 173);
  }
  .left-text {
    margin-right: 10px;
  }
}
input::-webkit-input-placeholder {
  color: #d9d9d9;
  font-size: 36px;
}
</style>
