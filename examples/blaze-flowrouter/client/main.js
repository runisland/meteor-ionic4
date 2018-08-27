import { Meteor } from 'meteor/meteor';

import './routes';
import './appMenu';
import './mobilePreview';
import './homePage';

import './main.html';

import {isAppModeMd} from './utils';


// Use Hashbang URL for the client-only online demo,
// to make sure routing works better even without server.
// https://github.com/kadirahq/flow-router#hashbang-urls
// Most of the time you do not need this option.
FlowRouter.wait();
Meteor.startup(function() {
  FlowRouter.initialize({hashbang: true});
});

Template.layout1.onRendered(function () {
  // Workaround, for now Ionic no longer uses mode specific `--ion-toolbar-md-background-color` CSS variable.
  isAppModeMd().then((isMd) => {
    this.$('ion-app')[0].style.setProperty(
      '--ion-toolbar-background-color',
      isMd ? '#ff840e' : 'initial'
    );
  });
});
