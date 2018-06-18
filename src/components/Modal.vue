<template>
  <GenericModal @close="close" :background="background" :closeOnBgClick="closeOnBgClick">
    <div class="header">
      <span class="title">{{title}}</span>
      <div class="close">
        <img @click="close" :src="closeIcon" alt="X" />
      </div>
    </div>
    <slot></slot>
  </GenericModal>
</template>
<script>
/* Usage:
<FlockModal @close="showModal = false" v-if="showModal" title="Settings">
  Content here.
</FlockModal>
 */
import closeIcon from '@/assets/images/close.svg';
import GenericModal from './GenericModal.vue';

export default {
  data() {
    return {
      closeIcon,
    };
  },
  components: {
    GenericModal,
  },
  props: {
    title: String,
    closeOnBgClick: {
      default: false,
      type: Boolean,
    },
    background: {
      type: String,
      default: '',
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}
.close {
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
}
</style>
