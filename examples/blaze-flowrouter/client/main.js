import { Meteor } from 'meteor/meteor';

import './routes';
import './appMenu';
import './mobilePreview';
import './homePage';

import './main.html';


// Use Hashbang URL for the client-only online demo,
// to make sure routing works better even without server.
// https://github.com/kadirahq/flow-router#hashbang-urls
// Most of the time you do not need this option.
FlowRouter.wait();
Meteor.startup(function() {
  FlowRouter.initialize({hashbang: true});
});
