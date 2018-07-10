# runisland:ionic4

[Meteor Atmosphere package](https://atmospherejs.com/runisland/ionic4) that automatically imports Ionic4 Web Components (i.e. [@ionic/core](https://www.npmjs.com/package/@ionic/core)) into your Client templates.

[![GitHub releases](https://img.shields.io/github/release/runisland/meteor-ionic4.svg?label=GitHub)](https://github.com/runisland/meteor-ionic4/releases)


## Quick Guide

1. Add this package to your Meteor project: `meteor add runisland:ionic4`

That is it!


### Example apps

- With Blaze:
  - Live demo: https://runisland.github.io/meteor-ionic4/blaze-flowrouter/?ionic:mode=ios (only client assets, no server, therefore routing is not fully functional) (`@ionic/core` version 4.0.0-alpha.7 has [currently a bug](https://github.com/ionic-team/ionic/issues/14701) in Firefox in `"md"` mode)
  - Source code: https://github.com/runisland/meteor-ionic4/tree/master/examples/blaze-flowrouter

- With Vue:
  - Live demo: https://runisland.github.io/meteor-ionic4/vue/?ionic:mode=ios (only client assets, no server, therefore routing is not fully functional) (`@ionic/core` version 4.0.0-alpha.7 has [currently a bug](https://github.com/ionic-team/ionic/issues/14701) in Firefox in `"md"` mode)
  - Source code: https://github.com/runisland/meteor-ionic4/tree/master/examples/vue


## How does it work?

The package automatically bundles the `@ionic/core` loader into your Meteor App, exposes Ionic assets, and tells the loader where to find them.

Yep, starting with version 4, Ionic has its own lazy-loading mechanism.

Therefore there is nothing else to `import` in your app.

Ionic4 will _Just Work_<sup>TM</sup>, whether you use Blaze, React, Vue, Angular, etc.


### Custom tags configuration

Note that you may still need to configure your template engine so that it knows what to do with Ionic's custom tags (you probably just want the engine to ignore them).

For example in Vue:
```javascript
// Ignore tags that start with "ion-"
Vue.config.ignoredElements = [/^ion-/];
```

Blaze uses a different component syntax (`{{> myComponent}}`), therefore it does not interfere with Ionic4 Web Components (like `<ion-app>`).
As a consequence there is nothing to configure if you use Blaze.


## Build

Go to the `package` subfolder and build:
```bash
$ cd package
$ npm run build
```

## Overriding with a local version

Cf. [Overriding published packages with a local version](https://guide.meteor.com/writing-atmosphere-packages.html#overriding-atmosphere-packages)

1. Create a `packages` folder at the root of your Meteor project.
2. Create a subfolder in it to host your local version of this package. E.g. name it "`meteor-ionic4`".
3. Copy the content of the `package` subfolder of the `runisland:ionic4` package repository into this "`meteor-ionic4`" subfolder.
4. Navigate to this subfolder and execute the build script, so that it retrieves the Ionic4 assets:

```bash
$ cd packages/meteor-ionic4
$ npm run build
```

If you want to load a different version of `@ionic/core` (e.g. if the package author no longer updates it in the Atmosphere registry),
simply update the version in `devDependencies` field of the `package.json` file, then re-run the build script.


## License

[![license](https://img.shields.io/github/license/runisland/meteor-ionic4.svg)](LICENSE)

`runisland:ionic4` is distributed under the [MIT License](http://choosealicense.com/licenses/mit/) (Expat type), like Ionic and Meteor.

