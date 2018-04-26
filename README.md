# runisland:ionic4

[Meteor Atmosphere package](https://atmospherejs.com/runisland/ionic4) that automatically imports Ionic4 Web Components (i.e. [@ionic/core](https://www.npmjs.com/package/@ionic/core)) into your Client templates.

[![GitHub releases](https://img.shields.io/github/release/runisland/meteor-ionic4.svg?label=GitHub)](https://github.com/runisland/meteor-ionic4/releases)


## Quick Guide

1. Add this package to your Meteor project: `meteor add runisland:ionic4`

That is it!


## How does it work?

The package will automatically add a `<script>` tag in your page `<body>` to load Ionic 4's loader script.

Yep, starting with version 4, Ionic has its own loading mechanism, and depends on reading its `<script>`'s src to determine the path of all its dependencies.
Unless Ionic comes up with a better way once it releases its final version 4.

Besides including the Ionic `<script>` tag, this package also exposes all Ionic files as public assets in your app, so that they can be loaded by Ionic loader.

Therefore there is nothing else to `import` in your app.

Ionic4 will _Just Work_<sup>TM</sup>, whether you use Blaze, React, Vue, Angular, etc.

Note that you may still need to configure your template engine so that it knows what to do with Ionic's custom tags (you probably just want the engine to ignore them).

For example in Vue:
```javascript
// Ignore tags that start with "ion-"
Vue.config.ignoredElements = [/^ion-/];
```


## Build

Just execute:
```bash
$ npm run build
```


## License

[![license](https://img.shields.io/github/license/runisland/meteor-ionic4.svg)](LICENSE)

`runisland:ionic4` is distributed under the [MIT License](http://choosealicense.com/licenses/mit/) (Expat type), like Ionic and Meteor.

