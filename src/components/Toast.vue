<template>
  <div
    v-if="!!message"
    class="toast">
    <Banner
      :styles="toastStyles"
      :position="position"
    >
      {{ message }}
    </Banner>
  </div>
</template>
<script>
import bus from '@/helpers/eventBus';
import Banner from './Banner.vue';

export default {
  components: {
    Banner,
  },
  props: {
    position: String,
  },
  data() {
    return {
      message: false,
      toastStyles: {
        bottom: '20px',
        opacity: 0.9,
        transform: 'translateX(-50%)',
        left: '50%',
        textAlign: 'center',
      },
    };
  },
  methods: {
    showToast(message, time = 5000) {
      if (message) {
        this.message = message;
        setTimeout(() => {
          this.message = false;
          this.$emit('onhidetoast');
        }, time);
      }
    },
  },
  created() {
    bus.$on('showtoast', this.showToast);
  },
};
</script>
<style lang="scss" scoped>

</style>
