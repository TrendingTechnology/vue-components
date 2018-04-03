<template>
  <div class="banner" :style="styles" :class="`banner__${position}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    position: {
      type: String,
      default: 'top',
      validator(position) {
        return ['top', 'bottom'].indexOf(position) > -1;
      },
    },
    styles: {
      type: Object,
      default: () => ({
        left: 0,
        right: 0,
      }),
    },
  },
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 12px;
  background-color: #fcf6cd;
  color: #f6a623;
  text-align: left;
  position: fixed;
  z-index: 2;
}
.banner__top {
  top: 0;
}
.banner__bottom {
  bottom: 0;
}
</style>
