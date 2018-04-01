<template>
  <div
    v-if="show"
    class="toast">
    <Banner :position="position">
      <slot></slot>
    </Banner>
  </div>
</template>
<script>
import Banner from './Banner.vue';

export default {
  components: {
    Banner,
  },
  props: {
    position: String,
    time: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  created() {
    setTimeout(() => {
      this.show = false;
      this.$emit('toasthidden');
    }, this.time);
  },
};
</script>
<style lang="scss" scoped>

</style>
