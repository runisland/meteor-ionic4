<template>
  <page-wrapper title="Home page">
    <h1>Welcome to Meteor Ionic4 with Vue!</h1>

    <p>
      This is a demo app showing how to basically use Ionic4
      (a.k.a. <a href="https://www.npmjs.com/package/@ionic/core" target="_blank"><code>@ionic/core</code></a>)
      within a Meteor project with <a href="https://vuejs.org/" target="_blank">Vue</a> template engine.
    </p>
    <p>
      It uses <a href="https://router.vuejs.org/" target="_blank">Vue Router</a>
      to demonstrate basic routing:
      <router-link to="/todo">Link to To-Do page</router-link>
    </p>

    <ul>
      <li><a href="https://github.com/runisland/meteor-ionic4/tree/master/examples/vue" target="_blank">Source code of this demo app</a></li>
      <li><a href="https://github.com/runisland/meteor-ionic4" target="_blank"><code>runisland:ionic4</code> package repository</a></li>
    </ul>

    <hello-part></hello-part>
    <info-part></info-part>
  </page-wrapper>
</template>


<script>
import PageWrapper from './page-wrapper';
import HelloPart from './hello-part';
import InfoPart from './info-part';


export default {
  name: 'home-page',
  components: {
    PageWrapper,
    HelloPart,
    InfoPart,
  },
}
</script>
