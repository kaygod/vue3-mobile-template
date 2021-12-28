<!-- 表单组件 -->
<template>
  <div class="form">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { onBeforeUnmount, ref, provide } from "vue";
import { validateResult, FunctionType } from "@/util/validate";
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  defineComponent,
} from "vue";
import { Alert } from "@/util/common";

export default defineComponent({
  name: "Form",
  props: {
    rules: Object,
  },
  setup(props, context) {
    const list = ref<any[]>([]);

    const listener = (fn: any) => {
      list.value.push(fn);
    };

    provide("collectValidate", listener);

    provide("rules", props.rules); // 将校验规则分发下去

    //验证函数
    const validate = (propName = null) => {
      if (propName !== null) {
        //检测某一项
        const oneFn: () => validateResult = list.value.find(
          (fn: FunctionType) => {
            return fn.propName === propName;
          }
        );
        if (oneFn) {
          const result = oneFn();
          if (result && result.msg) {
            //验证不通过
            Alert(result.msg);
            return false;
          } else {
            return true;
          }
        }
      }

      const array: validateResult[] = list.value.map(
        (fn: () => validateResult) => {
          return fn();
        }
      );

      const one = array.find((item) => {
        return item.flag === false;
      });

      if (one && one.msg) {
        //验证不通过
        Alert(one.msg);
        return false;
      } else {
        return true;
      }
    };

    return {
      validate,
    };
  },
});
</script>
<style scoped lang="less"></style>
