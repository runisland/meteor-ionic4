<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button menu="appMenu">
            <ion-icon name="menu"></ion-icon>
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
}
</script>
