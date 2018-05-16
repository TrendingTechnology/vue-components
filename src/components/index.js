import Vue from 'vue';
import eventBus from '@/helpers/eventBus';
import Button from './Button.vue';
import Radio from './Radio.vue';
import Checkbox from './Checkbox.vue';
import Dropdown from './Dropdown.vue';
import Banner from './Banner.vue';
import Toast from './Toast.vue';
import Link from './Link.vue';

function triggerGlobalClick(e) {
  e.stopPropagation();
  eventBus.$emit('focusChanged', this);
}
document.addEventListener('click', triggerGlobalClick);

Vue.mixin({
  mounted() {
    this.$el.addEventListener('click', triggerGlobalClick);
  },
  beforeDestroy() {
    this.$el.removeEventListener('click', triggerGlobalClick);
  },
});

export default {
  Radio,
  Button,
  Checkbox,
  Dropdown,
  Banner,
  Toast,
  Link,
  bus: eventBus,
};
