import { Template } from 'meteor/templating';

import { getAppMode } from './utils';

import './mobilePreview.html';


Template.mobilePreview.onRendered(function () {
  const self = this;

  // Detect preview mode change.
  this.$('ion-segment-button').click(function () {
    const targetMode = self.$(this).data('mode');
    const $container = self.$('.docs-preview-device');
    const targetSrc = Meteor.absoluteUrl(this.value);

    if (targetMode === 'ios') {
      $container.addClass('ios');
    } else {
      $container.removeClass('ios');
    }

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


function selectPreviewMode(targetMode) {
  const button = document.querySelector(`ion-segment-button[data-mode="${targetMode}"]`);
  if (button) {
    button.componentOnReady().then(() => {
      // Click on the underlying <button>, so that it gets highlighted
      // and the above click listener gets called to fill the <iframe>'s src.
      // Make sure `this` is bound to the Template instance!
      this.$(button).children('button').click();
    });
  }
}
