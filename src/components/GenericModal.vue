<template>
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    background: {
      default: '',
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  text-align: left;
  .modal-content {
    padding: 1.5em;
    @include borderRadius();
    @include boxShadow();
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $text-secondary;
  }
}
</style>
