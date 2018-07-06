import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './homePage.html';


Template.home.onRendered(function () {
  // Because in this demo we use FlowRouter Hashbang option,
  // we have to refactor direct <a href> links.
  // You normally do not need this at all.
  const queryParams = {};
  const isMobilePreview = FlowRouter.getQueryParam('isMobilePreview');
  if (isMobilePreview) {
    queryParams['isMobilePreview'] = isMobilePreview;
  }
  this.$('a[data-href]').each((index, aEl) => {
    aEl.href = FlowRouter.url('/#!' + aEl.dataset.href, null, queryParams);
  });
  this.$('a[data-href]').click(function (event) {
    event.preventDefault();
    console.log(this.dataset.href)
    FlowRouter.go(this.dataset.href, null, queryParams);
  });
});


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(function helloOnRendered() {
  const instance = this;

  this.$('ion-button').click(function (event) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  });
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

/*
// Ionic4 interferes with the template inner structure,
// making event maps not effective at all.
// Use template `onRendered` hook with `this.$(selector).on`
// to attach event listeners instead.
Template.hello.events({
  'click ion-button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/