import Vue from 'vue';
import eventBus from '@/helpers/eventBus';
import FlockButton from './Button.vue';
import FlockRadio from './Radio.vue';
import FlockCheckbox from './Checkbox.vue';
import FlockDropdown from './Dropdown.vue';
import FlockSelect from './Select.vue';
import FlockBanner from './Banner.vue';
import FlockModal from './Modal.vue';
import FlockToast from './Toast.vue';
import FlockLink from './Link.vue';

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

const Components = {
  FlockButton,
  FlockRadio,
  FlockCheckbox,
  FlockDropdown,
  FlockSelect,
  FlockBanner,
  FlockModal,
  FlockToast,
  FlockLink,
};

export default Components;
export { eventBus };
