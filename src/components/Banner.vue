<template>
  <div class="banner" :style="styles" :class="position">
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
        backgroundColor: '#fcf6cd',
        color: '#f6a623',
        textAlign: 'left',
      }),
    },
  },
};
</script>
<style lang="scss" scoped>
.banner {
  position: fixed;
  left: 0;
  right: 0;
  padding: 12px;
}
.top {
  top: 0;
}
.bottom {
  bottom: 0;
}
</style>
