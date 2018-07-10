# Meteor Ionic4 demo App with Vue

This is an example of a Meteor 1.7 App using Vue template engine, and Ionic4 Web Components.

Steps to reproduce this demo App:
1. Create your Meteor project: `$ meteor create --bare myProjectName` (option `--bare` to replace Blaze by `static-html` package)
2. Add [Vue-Meteor](https://atmospherejs.com/akryum/vue-component) Atmosphere package: `$ meteor add akryum:vue-component`
3. Add [Ionic4](https://atmospherejs.com/runisland/ionic4) Atmosphere package: `$ meteor add runisland:ionic4`
4. Add Vue and Vue-router npm packages: `$ meteor npm install -S vue vue-router`

Configure Vue to ignore Ionic tags; in your main script:
```javascript
import Vue from 'vue';

Vue.config.ignoredElements = [/^ion-/];
```

Note: with `static-html` package, `.html` files are still eagerly loaded. Do not `import './my.html'`.

All the demo code is contained in the `client` folder.


## Bug in Firefox

Note: there seems to be a bug in @ionic/core version 4.0.0-alpha.7 that prevents using an `<ion-menu-toggle>` in Firefox in `"md"` mode.
See [issue ionic-team/ionic #14701](https://github.com/ionic-team/ionic/issues/14701).

Therefore this demo app might currently not behave properly in Firefox in `"md"` mode.
