<template>
  <div
    v-if="show"
    class="toast">
    <Banner
      :styles="toastStyles"
      :position="position"
    >
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
    time: {
      type: Number,
      default: 5000,
    },
    position: {
      type: String,
      default: 'bottom',
    },
  },
  data() {
    return {
      show: true,
      toastStyles: {
        bottom: '20px',
        opacity: 0.9,
        transform: 'translateX(-50%)',
        left: '50%',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        borderRadius: '4px',
        maxWidth: '96%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
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
