<template>
  <div class="hello">
    <hr>
    <div>
      <h2>Dropdown component</h2>
      <div class="dropdowns">
        <div class="left-align">
          <h3>Left Align (Without beak)</h3>
          <flock-dropdown
            :open="dropdownOpen"
            align="left"
            width="120%"
          >
            <div slot="text">Display Label</div>
            <div>
              This content will be displayed.
            </div>
          </flock-dropdown>
        </div>
        <div class="middle-align">
          <h3>Middle Align</h3>
          <flock-dropdown
            beakSize="6px"
            :open="dropdownOpen"
          >
            <div slot="text">Display Label</div>
            <div>
              This content will be displayed.
            </div>
          </flock-dropdown>
        </div>
        <div class="right-align">
          <h3>Right Align</h3>
          <flock-dropdown
            :open="dropdownOpen"
            align="right"
            width="120%"
          >
            <div slot="text">Display Label</div>
            <div>
              This content will be displayed.
            </div>
          </flock-dropdown>
        </div>
      </div>
    </div>
    <hr>
    <h2>
      Button Components:
    </h2>
    <div class="component-container">
      <div
        class="buttons"
        :key="index"
        v-for="(button, index) in buttonTypes">
        <label for="">{{button.type}} {{ !!button.invert ? '(Inverted)' : '' }}:</label>
        <label :for="`disabler-${index}`">
          <input
            :id="`disabler-${index}`"
            type="checkbox"
            v-model="button.disabled"
          />
          Disabled
        </label>
        <flock-button
          :disabled="button.disabled"
          :invert="!!button.invert"
          :type="button.type">
          {{button.type}}
        </flock-button>
      </div>
    </div>
    <div class="full-width">
      <flock-button
        size="full"
        :loading="loading"
        @click="showLoader"
      >
        Full Button
      </flock-button>
    </div>
    <hr>
    <h2>
      Radio Input Components:
    </h2>
    <div class="container">
      <div class="elem">
        Radio Input Value: <b>{{ radio }}</b>
        <flock-radio
          label="Is this the value!"
          v-model="radio"
          optionValue="Yes"
        >
        </flock-radio>
        <flock-radio
          label="Or is this the value!"
          v-model="radio"
          optionValue="No"
        >
        </flock-radio>
      </div>
      <div class="elem">
        Radio: <b>{{ disabledSelectedRadio }}</b>
        <flock-radio
          label="Disabled Selected"
          v-model="disabledSelectedRadio"
          optionValue="Disabled & Selected"
          :disabled="true"
        >
        </flock-radio>
        <flock-radio
          label="Disabled unselected"
          v-model="disabledSelectedRadio"
          optionValue="Can be anything."
          :disabled="true"
        >
        </flock-radio>
      </div>
    </div>
    <hr>
    <h2>Checkbox Component</h2>
    <div class="container">
      <div class="elem">
        <flock-checkbox
          v-model="checkbox"
          id="checkbox"
        >
          Selected Checkbox
        </flock-checkbox>
        {{ checkbox }}
      </div>
      <div class="elem">
        <flock-checkbox
          type="switch"
          v-model="checkbox"
          id="checkbox"
        >
          Switch Styled
        </flock-checkbox>
        {{ checkbox }}
      </div>
      <div class="elem">
        <flock-checkbox
          v-model="disabledSelectedCheckbox"
          :disabled="true"
          id="disabledSelectedCheckbox"
        >
          Disabled Selected Checkbox
        </flock-checkbox>
        {{ disabledSelectedCheckbox }}
      </div>
      <div class="elem">
        <flock-checkbox
          v-model="disabledSelectedCheckbox"
          :disabled="true"
          type="switch"
        >
          Switch Styled
        </flock-checkbox>
        {{ disabledSelectedCheckbox }}
      </div>

      <div class="elem">
        <flock-checkbox
          v-model="disabledCheckbox"
          :disabled="true"
          id="disabledCheckbox"
        >
          Disabled Checkbox
        </flock-checkbox>
        {{ disabledCheckbox }}
      </div>
      <div class="elem">
        <flock-checkbox
          v-model="disabledCheckbox"
          :disabled="true"
          type="switch"
        >
          Disabled Checkbox
        </flock-checkbox>
        {{ disabledCheckbox }}
      </div>

      <div class="elem">
        <flock-checkbox
          v-model="arrayCheckbox"
          trueValue="hello"
        >
          Hello
        </flock-checkbox>
        <flock-checkbox
          v-model="arrayCheckbox"
          trueValue="goodbye"
        >
          Goodbye
        </flock-checkbox>
        <flock-checkbox
          v-model="arrayCheckbox"
          trueValue="toodles"
        >
          Toodles
        </flock-checkbox>
        Chosen greetings: {{ arrayCheckbox }}
      </div>
    </div>
    <hr>
    <h2>Banners & Toasts</h2>
    <div class="content">
      Toggle Banner position:
      {{ position }}
      <flock-button
        @click="togglePosition"
      >
        Toggle
      </flock-button>
      <flock-banner
        :position="position"
      >
        This is a banner!
      </flock-banner>
    </div>
    <div class="content">
      Show Toast:
      <flock-button @click="showToast = !showToast">
        Show Toast
      </flock-button>
      <flock-toast
        @toasthidden="showToast = false"
        v-if="showToast"
        position="bottom"
      >
        This is a toast!
      </flock-toast>
    </div>
    <h2>Links</h2>
    This link will show the toast:
    <flock-link @click="showToast = true">Show toast</flock-link>
  </div>
</template>

<script>
import './index';

export default {
  name: 'HelloWorld',
  data: () => ({
    radio: 'No',
    position: 'top',
    loading: false,
    disabledSelectedRadio: 'Disabled & Selected',
    checkbox: true,
    showToast: false,
    disabledCheckbox: false,
    disabledSelectedCheckbox: true,
    dropdownOpen: false,
    arrayCheckbox: ['toodles'],
    buttonTypes: [
      {
        type: 'primary',
        disabled: false,
      },
      {
        type: 'secondary',
        disabled: false,
      },
      {
        type: 'destructive',
        disabled: false,
      },
      {
        type: 'primary',
        disabled: false,
        invert: true,
      },
      {
        type: 'secondary',
        disabled: false,
        invert: true,
      },
      {
        type: 'destructive',
        disabled: false,
        invert: true,
      },
    ],
  }),
  methods: {
    togglePosition() {
      if (this.position === 'top') {
        this.position = 'bottom';
      } else {
        this.position = 'top';
      }
    },
    showLoader() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.buttons {
  label {
    text-transform: capitalize;
    margin-right: 12px;
  }
}
.dropdowns {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
.component-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 70px 70px;
  @include respond-to(mobile) {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    .buttons {
      margin-bottom: 12px;
    }
  }
  @include respond-to(medium-screens) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 70px 70px 70px;
  }
}
.container {
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
