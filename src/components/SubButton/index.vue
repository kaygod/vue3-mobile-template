<!-- 提交按钮组件 -->
<template>
  <div
    class="sub-button"
    :style="{
      border: `1px solid ${border_color}`,
      backgroundColor: background_color,
      color: color,
      fontWeight: font_weight,
    }"
    @click="submmit"
  >
    <template v-if="bottom_text == null">
      {{ text }}
    </template>
    <template v-else>
      <div>
        <p>{{ text }}</p>
        <p class="bottom-style">
          {{ bottom_text }}
        </p>
      </div>
    </template>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  defineComponent,
} from "vue";

export default defineComponent({
  name: "SubButton",
  props: {
    text: String,
    bottom_text: {
      // 是否分两行来先显示
      type: String,
      default: null,
    },
    background_color: {
      type: String,
      default: "rgb(158,223,215)",
    },
    color: {
      type: String,
      default: "#fff",
    },
    font_weight: {
      type: String,
      default: "bold",
    },
    border_color: {
      type: String,
      default: "transparent",
    },
  },
  setup(props, context) {
    const submmit = () => {
      context.emit("sub");
    };

    return {
      submmit,
    };
  },
});
</script>
<style scoped lang="less">
.sub-button {
  width: 100%;
  height: 90px;
  text-align: center;
  border-radius: 38px;
  font-size: 36px;
  letter-spacing: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  .bottom-style {
    font-size: 20px;
    margin-top: 5px;
    font-weight: normal;
  }
}
</style>