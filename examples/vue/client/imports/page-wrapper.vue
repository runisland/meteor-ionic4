<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button menu="appMenu">
            <ion-icon name="menu" :style="headerButtonStyle"></ion-icon>
          </ion-menu-button>
        </ion-buttons>
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :padding="padding">
      <slot></slot>
    </ion-content>
  </div>
</template>


<script>
import {isAppModeMd} from './utils';


export default {
  name: 'page-wrapper',
  props: {
    title: {
      type: String,
      default: '',
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      headerButtonStyle: {},
    };
  },
  mounted() {
    // Since we have set the `--ion-toolbar-background-color` CSS variable the same as `--ion-color-primary`,
    // header buttons in iOS mode are the same color as the header background.
    // Workaround to change their color to `--ion-color-primary-contrast` instead (white in this case).
    isAppModeMd().then((isMd) => {
      if (!isMd) {
        this.$set(this.headerButtonStyle, 'color', 'var(--ion-color-primary-contrast)');
      }
    });
  },
}
</script>
