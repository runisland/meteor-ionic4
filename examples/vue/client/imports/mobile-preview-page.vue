<template>
  <page-wrapper title="Mobile Preview">
    <ion-segment ref="previewModeButtonsContainer">
      <ion-segment-button
          v-for="(modeButton, index) of modeButtons"
          :key="index"
          @click="switchPreviewMode(modeButton.targetMode, modeButton.targetSrc)"
          :data-mode="modeButton.targetMode"
      >
        {{modeButton.targetName}}
      </ion-segment-button>
    </ion-segment>
    <!-- Adapted from Ionic Docs API Preview App https://github.com/ionic-team/ionic-docs/tree/master/src/components/docs-preview -->
    <div class="docs-preview-device" :class="{ios: previewMode === 'ios'}">
      <svg viewBox="0 0 219 31" class="docs-preview-device__ios-notch">
        <path d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z" fill-rule="evenodd"/>
      </svg>
      <figure>
        <iframe :src="iframeSrc"></iframe>
      </figure>
    </div>
  </page-wrapper>
</template>


<script>
import PageWrapper from './page-wrapper';
import {getAppMode} from './utils';


export default {
  name: 'mobile-preview-page',
  components: {
    PageWrapper,
  },
  data() {
    return {
      modeButtons: [{
        targetMode: 'ios',
        targetName: 'iOS',
        targetSrc: '/?ionic:mode=ios&ionic:statusbarPadding=true'
      }, {
        targetMode: 'md',
        targetName: 'MD',
        targetSrc: '/?ionic:mode=md'
      }],
      previewMode: 'md',
      iframeSrc: '',
    };
  },
  mounted() {
    // Automatically select the preview mode based on the current Ionic App mode.
    getAppMode().then(this.selectPreviewMode);

    // When the app in the iframe sends a changeMode message,
    // change the preview mode accordingly.
    window.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'changeMode') {
        this.selectPreviewMode(event.data.targetMode);
      }
    });
  },
  methods: {
    async selectPreviewMode(targetMode) {
      const segmentButton = this.$refs.previewModeButtonsContainer.querySelector(
        `ion-segment-button[data-mode="${targetMode}"]`
      );
      if (segmentButton) {
        await segmentButton.componentOnReady();
        segmentButton.click();
        segmentButton.checked = true;
      }
    },
    switchPreviewMode(targetMode, targetSrc) {
      this.previewMode = targetMode;
      this.iframeSrc = Meteor.absoluteUrl(targetSrc);
    },
  },
};
</script>


<style scoped>
.docs-preview-device {
  --header-height: 130px;
  --device-aspect-ratio: 2.1667;
  --device-padding: 2rem;

  padding: var(--device-padding);
  position: sticky;
  top: 0;

  box-sizing: content-box;
}

.docs-preview-device,
.docs-preview-device > figure {
  max-width: 375px;
  min-width: 320px;
  width: calc((100vh - var(--header-height) - var(--device-padding) * 2) / var(--device-aspect-ratio));
}

.docs-preview-device > figure {
  border-radius: 28px;
  box-shadow: 0 0 0 14px #090a0d, 0 0 0 17px #9fa3a8, 0 0 34px 17px rgba(0,0,0,0.2);
  height: 0;
  margin: 0;
  overflow: hidden;
  padding-bottom: calc(var(--device-aspect-ratio) * 100%);
  position: relative;
  z-index: 1;
}

.docs-preview-device > figure > iframe {
  border: none;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.docs-preview-device__ios-notch {
  display: none;
  left: 50%;
  position: absolute;
  /*top: -1px;*/
  margin-top: -1px;
  transform: translateX(-50%);
  width: 165px;
  z-index: 2;
}

.docs-preview-device.ios figure:after {
  background-color: rgba(0,0,0,0.5);
  border-radius: 2px;
  bottom: 6px;
  content: "";
  display: none;
  height: 4px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 35%;
  z-index: 1;
}

.docs-preview-device.ios .docs-preview-device__ios-notch,
.docs-preview-device.ios figure:after {
  display: block;
}
</style>
