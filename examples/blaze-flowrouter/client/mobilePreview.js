import { Template } from 'meteor/templating';

import { getAppMode } from './utils';

import './mobilePreview.html';


Template.mobilePreview.onRendered(function () {
  const self = this;

  // Detect preview mode change.
  this.$('ion-segment')[0].addEventListener('ionChange', function (event) {
    const segment = event.currentTarget;
    const targetMode = segment.value;
    const $targetButton = self.$(`ion-segment-button[value="${targetMode}"]`);
    const targetSrc = Meteor.absoluteUrl($targetButton.data('src'));
    const $container = self.$('.docs-preview-device');

    // Adjust device simulator appearance.
    if (targetMode === 'ios') {
      $container.addClass('ios');
    } else {
      $container.removeClass('ios');
    }

    // Change the iframe src.
    self.$('iframe').attr('src', targetSrc);
  });

  // Automatically select the preview mode based on the current Ionic App mode.
  getAppMode().then(selectPreviewMode);

  // When the app in the iframe sends a changeMode message,
  // change the preview mode accordingly.
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'changeMode') {
      selectPreviewMode(event.data.targetMode);
    }
  });
});


async function selectPreviewMode(targetMode) {
  const segment = document.querySelector('ion-segment');

  if (segment) {
    await segment.componentOnReady();
    segment.value = targetMode;
  }
}
