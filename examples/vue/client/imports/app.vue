<template>
  <ion-app>
    <ion-split-pane>
      <!-- side menu -->
      <app-menu title="Menu"></app-menu>

      <!-- main content -->
      <div class="ion-page" main>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </div>
    </ion-split-pane>
    <ion-menu-controller></ion-menu-controller>
  </ion-app>
</template>


<script>
import AppMenu from './app-menu';


export default {
  name: 'App',
  components: {
    AppMenu,
  }
};

</script>


<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
