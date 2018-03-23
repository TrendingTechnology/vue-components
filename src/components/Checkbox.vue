<template>
  <div :class="[{'form-group': isForm}]">
    <div class="flock-checkbox">
      <input
        :disabled="disabled"
        :id="defaultId"
        v-model="proxy"
        :value="trueValue"
        type="checkbox"
        @change="update"
      />
      <label :style="labelStyles" :class="{ 'styled': !!labelStyles }" :for="defaultId">
        {{ label }}
      </label>
    </div>
  </div>
</template>
<script>
import helpers from '@/helpers';

const { getRandomId } = helpers;

export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    id: String,
    isForm: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    trueValue: {
      type: [Number, Array, Object, Boolean, String],
      default: true,
    },
    falseValue: {
      type: [Object, Boolean, String],
      default: false,
    },
    label: {
      type: String,
    },
    value: {
      type: [Array, Object, Boolean, String],
      default: false,
    },
    labelStyles: {
      type: Object,
      default() {},
    },
  },
  data() {
    return {
      proxy: this.value,
      defaultId: '',
    };
  },
  watch: {
    value() {
      this.proxy = this.value;
    },
  },
  methods: {
    update() {
      this.$emit('change', this.proxy);
    },
  },
  created() {
    this.defaultId = this.id || getRandomId('Checkbox');
  },
};
</script>
<style lang="scss" scoped>
.flock-checkbox {
  text-align: left;
  input[type="checkbox"] {
    position: absolute;
    left: -999999px;
    & + label {
      color: $text-color;
      position: relative;
      font-size: 1rem;
      font-weight: normal;
      line-height: normal;
      z-index: 2;
      padding: 13px 15px 13px 2rem;
      display: block;
      margin-right: 4em;
      @include ellipsis();
      &:before {
        content: "";
        box-sizing: border-box;
        width: 1rem;
        height: 1rem;
        display: inline-block;
        background-color: white;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        @include bg-cover(url(../assets/checkbox-default.svg));
        border-radius: 3px;
      }
    }
    &:disabled {
      & + label:before {
        @include bg-cover(url(../assets/checkbox-disabled.svg));
      }
      &:checked + label:before {
        @include bg-cover(url(../assets/checkbox-disabled-active.svg));
      }
    }
  }
  input[type="checkbox"]:checked + label {
    &:before {
      border: none;
      @include bg-cover(url(../assets/checkbox-active.svg));
    }
  }
  input[type="checkbox"] {
    &:before {
      @include bg-cover(url(../assets/checkbox-notall.svg));
    }
  }
}
</style>
