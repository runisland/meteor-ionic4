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
:root {
  --ion-color-primary: #4fc08d; /* Vue main colour. */
  --ion-color-primary-rgb: 79, 192, 141; /* Same as above but in RGB values, so that Ionic can use with alpha, see https://beta.ionicframework.com/docs/theming/advanced/#the-alpha-problem */
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-shade: #3a8d68;
  --ion-color-primary-tint: #5fe7aa;

  --ion-color-secondary: #e96900; /* Vue secondary colour. */

  --ion-text-color: #34495e; /* Vue text colour. */

  --ion-toolbar-md-background-color: #4fc08d; /* Vue main colour. */
  --ion-toolbar-border-color: #34495e;
}

/* Make sure <code> gets the secondary colour. */
code {
  color: var(--ion-color-secondary);
}

/* But <a><code/></a> in Vue theme gets the same colour as <a>. */
a code {
  color: var(--ion-color-primary);
}

/* In Vue theme, links are not underlined but bold. */
a {
  text-decoration: none;
  font-weight: 600;
}

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
