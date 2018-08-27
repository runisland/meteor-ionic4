# Meteor Ionic4 demo App with Vue

This is an example of a Meteor 1.7 App using Vue template engine, and Ionic4 Web Components.

Steps to reproduce this demo App:
1. Create your Meteor project: `$ meteor create --bare myProjectName` (option `--bare` to replace Blaze by [`static-html`](https://atmospherejs.com/meteor/static-html) package)
2. Add [Vue-Component](https://atmospherejs.com/akryum/vue-component) Atmosphere package: `$ meteor add akryum:vue-component`
3. Add [Ionic4](https://atmospherejs.com/runisland/ionic4) Atmosphere package: `$ meteor add runisland:ionic4`
4. Add [Vue](https://www.npmjs.com/package/vue) and [vue-router](https://www.npmjs.com/package/vue-router) npm packages: `$ meteor npm install -S vue vue-router`

Configure Vue to ignore Ionic tags; in your main script:
```javascript
import Vue from 'vue';

Vue.config.ignoredElements = [/^ion-/];
```

Note: with `static-html` package, `.html` files are still eagerly loaded. Do not `import './my.html'`.

All the demo code is contained in the `client` folder.


## Bug in Firefox

Note: there are still some issues in browsers different from Chrome.

Please feel free to submit issues on the [ionic-team/ionic issue tracker](https://github.com/ionic-team/ionic/issues).
