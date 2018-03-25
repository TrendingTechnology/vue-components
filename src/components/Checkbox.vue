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
        {{ label }}
        <span :style="{ backgroundImage: `url(${assets[state]})` }">
        </span>
      </label>
    </div>
  </div>
</template>
<script>
import helpers from '@/helpers';

const disabledActiveCheckbox = require('../assets/checkbox-disabled-active.svg');
const disabledCheckbox = require('../assets/checkbox-disabled.svg');
const activeCheckbox = require('../assets/checkbox-active.svg');
const defaultCheckbox = require('../assets/checkbox-default.svg');

const assets = {
  'checkbox-disabled-active': disabledActiveCheckbox,
  'checkbox-disabled': disabledCheckbox,
  'checkbox-active': activeCheckbox,
  'checkbox-default': defaultCheckbox,
};
const { getRandomId } = helpers;

export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  data() {
    return {
      proxy: this.value,
      defaultId: '',
      assets,
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
        @include bg-cover(url(../assets/checkbox-default.svg));
        border-radius: 3px;
      }
    }
    &:disabled {
      & + label > span {
        @include bg-cover(url(../assets/checkbox-disabled.svg));
      }
      &:checked + label > span {
        @include bg-cover(url(../assets/checkbox-disabled-active.svg));
      }
    }
  }
  input[type="checkbox"]:checked + label {
    & > span {
      border: none;
      @include bg-cover(url(../assets/checkbox-active.svg));
    }
  }
  input[type="checkbox"] {
    & > span {
      @include bg-cover(url(../assets/checkbox-notall.svg));
    }
  }
}
</style>
