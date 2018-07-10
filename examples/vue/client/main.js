import Vue from 'vue';
import VueRouter from 'vue-router';
import {Meteor} from 'meteor/meteor';

import routes from './imports/routes';
import App from './imports/app';


// Ignore Ionic custom tags, i.e. starting with "ion-" prefix.
Vue.config.ignoredElements = [/^ion-/];

const router = new VueRouter({
  // In a normal Meteor+Vue app, you would use the router history mode.
  // Here we use the default "hash" mode to improve the routing feature when no server is available.
  //mode: 'history',
  routes,
});

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
    router,
  });
});
