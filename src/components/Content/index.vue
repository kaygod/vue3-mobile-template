<!--容器-->
<template>
  <TopBar />
  <div
    class="main"
    :style="{ overflowY: scroll_bar ? 'scroll' : 'hidden' }"
    v-bind="$attrs"
  >
    <slot></slot>
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
import TopBar from "@/components/TopBar/index.vue";
export default defineComponent({
  components: {
    TopBar,
  },
  props: {
    scroll_bar: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped lang="less">
.main {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 95px;
}
</style>