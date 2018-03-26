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
      <label
        :style="labelStyles"
        :class="{ 'styled': !!labelStyles }"
        :for="defaultId"
      >
        <slot>{{ label }}</slot>
        <span>
        </span>
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
  data() {
    return {
      proxy: this.value,
      defaultId: this.id || getRandomId('Checkbox'),
    };
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
  watch: {
    value() {
      this.proxy = this.value;
    },
  },
  computed: {
    state() {
      let isChecked;
      if (this.proxy instanceof Array) {
        isChecked = this.proxy.indexOf(this.trueValue) > -1;
      } else if (typeof (this.proxy) === 'boolean') {
        isChecked = !!this.proxy;
      }
      if (this.disabled) {
        if (isChecked) {
          return 'checkbox-disabled-active';
        }
        return 'checkbox-disabled';
      }
      if (isChecked) {
        return 'checkbox-active';
      }
      return 'checkbox-default';
    },
  },
  methods: {
    update() {
      this.$emit('change', this.proxy);
    },
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
      @include ellipsis();
      & > span {
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
        border: solid 1px $border-color;
        border-radius: 3px;
      }
    }
    &:disabled {
      & + label > span {
        background: #F2F2F2;
        border-color: $input-border-color;
      }
      &:checked + label > span {
        background: $input-border-color;
      }
    }
  }
  input[type="checkbox"]:checked + label {
    & > span {
      border: none;
      background: $primary;
      &:after {
        content: '';
        position: absolute;
        top: 4px;
        left: 3px;
        width: 9px;
        height: 4px;
        border: 1px solid #ffffff;
        border-top: none;
        border-right: none;
        transform: rotate(-45deg);
        background: transparent;
      }
    }
  }
}
</style>
