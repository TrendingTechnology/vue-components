<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
      <flock-button size="full">
        Full Button
      </flock-button>
    </div>
    <hr>
    <h2>
      Radio Input Components:
    </h2>
    <div class="container">
      Radio Input Value: <b>{{ radio }}</b>
      <flock-radio
        name="radio-demo"
        label="Is this the value!"
        v-model="radio"
        optionValue="Yes"
      >
      </flock-radio>
      <flock-radio
        name="radio-demo"
        label="Or is this the value!"
        v-model="radio"
        optionValue="No"
      >
      </flock-radio>
      Disabled Radio Selected Value: <b>{{ disabledSelectedRadio }}</b>
      <flock-radio
        name="disabled-demo"
        label="Disabled Selected"
        v-model="disabledSelectedRadio"
        optionValue="Disabled & Selected"
        :disabled="true"
      >
      </flock-radio>
      <flock-radio
        name="disabled-demo"
        label="Disabled unselected"
        v-model="disabledSelectedRadio"
        optionValue="Can be anything."
        :disabled="true"
      >
      </flock-radio>
    </div>
    <hr>
    <h2>Checkbox Component</h2>
    <div class="container">
      <flock-checkbox
        v-model="checkbox"
        label="Selected Checkbox"
        name="checkbox"
        id="checkbox"
      >
      </flock-checkbox>
      {{ checkbox }}

      <flock-checkbox
        v-model="disabledSelectedCheckbox"
        label="Disabled Selected Checkbox"
        name="disabledSelectedCheckbox"
        :disabled="true"
        id="disabledSelectedCheckbox"
      >
      </flock-checkbox>
      {{ disabledSelectedCheckbox }}

      <flock-checkbox
        v-model="disabledCheckbox"
        label="Disabled Checkbox"
        name="disabledCheckbox"
        :disabled="true"
        id="disabledCheckbox"
      >
      </flock-checkbox>
      {{ disabledCheckbox }}

    </div>
    <flock-checkbox
      v-model="arrayCheckbox"
      label="Hello"
      trueValue="hello"
    >
    </flock-checkbox>
    <flock-checkbox
      v-model="arrayCheckbox"
      label="Goodbye"
      trueValue="goodbye"
    >
    </flock-checkbox>
    <flock-checkbox
      v-model="arrayCheckbox"
      label="Toodles"
      trueValue="toodles"
    >
    </flock-checkbox>
    Chosen greetings: {{ arrayCheckbox }}
    <hr>
  </div>
</template>

<script>
import './index';

export default {
  name: 'HelloWorld',
  data: () => ({
    radio: 'No',
    disabledSelectedRadio: 'Disabled & Selected',
    checkbox: true,
    disabledCheckbox: false,
    disabledSelectedCheckbox: true,
    dropdownOpen: false,
    arrayCheckbox: [],
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
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
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
  width: 50%;
  margin: 0 auto;
  text-align: left;
}
</style>
