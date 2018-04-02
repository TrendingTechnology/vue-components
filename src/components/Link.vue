<template>
  <a class="link" @click="onClick">
    <slot></slot>
  </a>
</template>
<script>
export default {
  methods: {
    onClick($event) {
      this.$emit('click', $event);
    },
  },
};
</script>
<style lang="scss" scoped>
.link {
  cursor: pointer;
  color: $primary;
  font-weight: 500;
  &:hover {
    text-rendering: none;
  }
}
</style>
