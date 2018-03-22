# Flock Components for VueJS

## How to use:
1. Just use `npm install --save @flockos/vue-components`
2. Now you can include the script by using `require('@flockos/vue-components')`

## List of components:
### Flock Button
Usage:
```
<flock-button type="primary">Submit</flock-button>
```

### Flock Radio

Usage:
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
