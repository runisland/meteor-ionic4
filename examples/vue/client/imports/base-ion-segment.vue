<template>
  <ion-segment :value="value" @ionChange="emitIonChange">
    <slot></slot>
  </ion-segment>
</template>


<script>
export default {
  name: 'base-ion-segment',
  // https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
  model: {
    prop: 'value',
    event: 'baseIonChange',
  },
  props: {
    value: String,
  },
  methods: {
    emitIonChange(event) {
      // Directly pass the new value
      // so that it can be used by v-model in the consumer component.
      // https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components
      this.$emit('baseIonChange', event.target.value);

      // Forward the "native" "ionChange" event as well
      // to avoid having to listen to @ionChange.native on the consumer component.
      this.$emit('ionChange', event);
    },
  },
}
</script>

