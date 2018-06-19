<template>
  <div
    class="flock-select"
    @click.stop="toggleOpen($event)"
    :style="{ width: width + 'px' }"
  >
    <div class="label">{{ selectedLabel }}</div>
    <span/>
    <transition name="fade">
      <ul class="options" v-if="selectOpen">
        <li
          class="list-item"
          :key="index"
          v-for="(option, index) in options"
          @click="onChange(option)"
        >
          {{option.label}}
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
import { eventBus } from './index';

export default {
  data() {
    let selectedLabel = 'Select a value';
    if (this.value) {
      const option = this.options.find(o => o.value === this.value);
      if (option) {
        selectedLabel = option.label;
      }
    }
    return {
      selectOpen: this.open,
      selectedLabel,
    };
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    // Can make options an object so as to avoid loops later.
    options: {
      type: Array,
      default: () => ([]),
    },
    value: {
      type: [String, Object, Number],
      default: 'Select a value',
    },
    width: {
      type: Number,
      default: 300,
    },
  },
  created() {
    /*
      If options is an array, render the list using that array.
      else convert the options Object into an array by mapping over key values.
      This can be done to avoid running a find on selectedLabel computation.
    */
    eventBus.$on('focusChanged', this.closeOnFocusChange);
  },
  destroyed() {
    eventBus.$off('focusChanged', this.closeOnFocusChange);
  },
  methods: {
    closeOnFocusChange(el) {
      if (this.$el !== el) {
        this.selectOpen = false;
      }
    },
    onChange({ label, value }) {
      this.selectedLabel = label;
      this.$emit('change', value);
    },
    toggleOpen() {
      this.selectOpen = !this.selectOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
.dropdown {
  user-select: none;
  position: relative;
  display: inline-block;
}
.flock-select {
  padding: 10px;
  display: inline-block;
  text-align: left;
  padding-right: 1.25em;
  border-radius: 2px;
  border: solid 1px $border-grey-light;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  white-space: nowrap;
  .label {
    @include ellipsis();
    max-width: 100%;
  }
  span {
    display: inline-block;
    cursor: pointer;
    transition: top 200ms ease-in-out, transform 200ms ease-in-out;
    border: solid transparent;
    content: " ";
    border-color: rgba(105, 113, 120, 0);
    border-top-color: #697178;
    border-width: 6px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-25%);
    .open & {
      top: -2px;
      transform: rotateX(180deg);
    }
  }
  .options {
    list-style: none;
    padding-left: 0;
    position: absolute;
    left: 0;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    border: solid 1px #eeeeee;
    min-width: 100%;
    text-align: left;
    z-index: 1;
  }
  .list-item {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: #f2f2f2;
    }
  }
}
</style>
