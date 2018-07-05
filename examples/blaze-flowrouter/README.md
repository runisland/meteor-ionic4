# Meteor Ionic4 demo App with Blaze and FlowRouter

This is an example of a Meteor 1.7 App using Blaze template engine, FlowRouter, and Ionic4 Web Components.

Steps to reproduce this demo App:
1. Create your Meteor project: `$ meteor create myProjectName` (uses Blaze by default)
2. Add [FlowRouter](https://atmospherejs.com/kadira/flow-router) Atmosphere package: `$ meteor add kadira:flow-router`
3. Add [BlazeLayout](https://atmospherejs.com/kadira/blaze-layout) Atmosphere package: `$ meteor add kadira:blaze-layout`
4. Add [Ionic4](https://atmospherejs.com/runisland/ionic4) Atmosphere package: `$ meteor add runisland:ionic4`


## Change compared to pure Blaze

Unfortunately, Ionic4 interferes with the templates position / inner structure, making [event maps](http://blazejs.org/api/templates.html#Event-Maps) not effective at all. Use template `onRendered` hook with `this.$(selector).on` to attach event listeners instead.

Example:
```javascript
Template.myTemplateName.onRendered(function () {
  this.$('.myTargetElementSelector').on('click', function () {
    // If using a `function () {}`, jQuery will make `this` as the currentTarget element.
    // You can use a fat arrow function instead `() => {}` to keep `this` as the template instance.
  });

  // If you want to use event delegation, for example if your elements are dynamic:
  // https://learn.jquery.com/events/event-delegation/
  this.$('.parentContainerButWithinTemplate').on('click', '.childElementsSelector', function () {
    // callback operations.
  });
});
```

instead of:
```javascript
Template.myTemplateName.events({
  'click .myTargetElementSelector'() {},
  'click .parentContainerButWithinTemplate.childElementsSelector'() {},
});
```


## Bug in Firefox

Note: there seems to be a bug in @ionic/core version 4.0.0-alpha.7 that prevents using an `<ion-menu-toggle>` in Firefox in `"md"` mode.
See [issue ionic-team/ionic #14701](https://github.com/ionic-team/ionic/issues/14701).

Therefore this demo app might currently not behave properly in Firefox in `"md"` mode.
