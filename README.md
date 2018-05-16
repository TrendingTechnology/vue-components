# Flock Components for VueJS

## Installation and Usage:
1. Just use `npm install --save @flockos/vue-components`
2. Now you can include the script by using `require('@flockos/vue-components')`

## List of components:
All components are registered with the Vue global and are available for use. You do not need to re-register them.

### Event Bus
You can use the Flock Component's own event bus to pass data around. 
#### List of events supported:

##### `focusChanged` 
Parameters: `Element` which was clicked

**Usage:**
```javascript
import { eventBus } from '@flockos/vue-components';

eventBus.$on('focusChanged', (element) => {
    // Do a few things if focus changes your element.
});
```

---
More events will be supported as needed.

##### Flock Button
Usage:
```
<flock-button type="primary">Submit</flock-button>
```

##### Flock Radio

**Usage:**
```
<flock-radio>
    name="radio-demo"
    label="Is this the value!"
    v-model="radio"
    optionValue="Yes"
    :disabled="false"
>
</flock-radio>
<flock-radio>
    name="radio-demo"
    label="Or is this the value!"
    v-model="radio"
    optionValue="No"
    :disabled="false"
>
</flock-radio>
```
