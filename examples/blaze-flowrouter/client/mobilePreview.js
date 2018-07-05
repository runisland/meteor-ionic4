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

  getAppMode().then((mode) => {
    const button = document.querySelector(`ion-segment-button[data-mode="${mode}"]`);
    if (button) {
      button.componentOnReady().then(() => {
        // Click on the underlying <button>, so that it gets highlighted
        // and the above click listener gets called to fill the <iframe>'s src.
        self.$(button).children('button').click();
      });
    }
  });
});
