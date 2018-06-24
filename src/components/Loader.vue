<template>
  <div class="loader">
    <div class="loader-container" v-if="loading" :style="style">
      <img
        src="https://static.flock.com/flock/apps/loader-green.svg"
        height="32px"
        width="32px"
      />
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {},
    };
  },
  props: {
    loading: {
      default: true,
      type: Boolean,
    },
    fullPage: {
      default: false,
      type: Boolean,
    },
  },
  created() {
    if (this.fullPage) {
      this.style = {
        height: '100vh',
        position: 'fixed',
        width: '100%',
      };
    }
  },
};
</script>
<style lang="scss" scoped>
.loader-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
