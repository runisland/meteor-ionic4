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


## Build

Just execute:
```bash
$ npm run build
```

## Overriding with a local version

Cf. [Overriding published packages with a local version](https://guide.meteor.com/writing-atmosphere-packages.html#overriding-atmosphere-packages)

After copying the `runisland:ionic4` package under the folder `packages` of the Meteor project, add two dedicated scripts to the project file `package.json` :

```
mkdir -p packages
cd packages
git clone https://github.com/runisland/meteor-ionic4.git
cd ..
# Here, a section `scripts` is assumed with already at least one script:
sed -i '/^\s*"scripts"\s*:/ a\
    "postinstall": "npm run meteor:ionic4",\
    "meteor:ionic4": "cd packages/meteor-ionic4 && npm run build",
' package.json
```

## License

[![license](https://img.shields.io/github/license/runisland/meteor-ionic4.svg)](LICENSE)

`runisland:ionic4` is distributed under the [MIT License](http://choosealicense.com/licenses/mit/) (Expat type), like Ionic and Meteor.

