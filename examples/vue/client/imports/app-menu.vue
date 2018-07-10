<template>
  <ion-menu menu-id="appMenu" ref="appMenu">
    <ion-header>
      <ion-toolbar>
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item
            button
            v-for="(route, index) of routes"
            :key="index"
            v-if="route.path !== '/mobile' || isSplitPaneVisible"
            @click="navigate(route.path)"
        >
          <ion-label full>{{route.name}}</ion-label>
        </ion-item>
        <ion-item button v-if="changeMode && otherModeName" @click="switchMode">
          <ion-label full>Switch to {{otherModeName}} mode</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>


<script>
import {Meteor} from 'meteor/meteor';
import {getAppOtherMode} from './utils';


export default {
  name: 'app-menu',
  props: {
    title: {
      type: String,
      default: 'Menu',
    },
  },
  data() {
    return {
      routes: this.$router.options.routes,
      isSplitPaneVisible: false,
      changeMode: true,
      otherMode: null,
    };
  },
  computed: {
    otherModeName() {
      return this.otherMode === 'md' ? 'MD' : 'iOS';
    },
  },
  mounted() {
    // Detect split pane visibility.
    const splitPaneEl = document.querySelector('ion-split-pane');
    if (splitPaneEl) {
      splitPaneEl.addEventListener('ionChange', () => {
        this.isSplitPaneVisible = splitPaneEl.isVisible();
      });
    }

    // Detect mode ("ios" or "md").
    getAppOtherMode().then((otherMode) => {
      this.otherMode = otherMode;
    });
  },
  methods: {
    // Menu item action.
    navigate(path) {
      this.$router.push({
        path,
      });

      // Now close the menu.
      // Closes only in mobile mode, not when splitPane is visible.
      // https://github.com/ionic-team/ionic/tree/v4.0.0-alpha.1/core/src/components/menu#close
      this.$refs.appMenu.close();
    },
    switchMode() {
      // Communicate with parent frame, if any.
      if (window.parent !== window.self) {
        window.parent.postMessage({
          type: 'changeMode',
          targetMode: this.otherMode,
        }, '*');
      } else {
        // Reload with forced mode.
        window.location.href = Meteor.absoluteUrl('/?ionic:mode=' + this.otherMode);
      }
    }
  },
}
</script>
