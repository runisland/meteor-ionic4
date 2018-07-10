<template name="hello">
  <div>
    <ion-button @click="counter += 1">Click Me</ion-button>
    <p>You've pressed the button {{counter}} times.</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
}
</script>
