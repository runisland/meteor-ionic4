## Publish the package

1. Update the versions:

- Ionic lib version in `package.json` devDependencies (if necessary).
- Package version in `package.js` (rollback to empty wrap number when changing Ionic version).
- Match the version in `.versions`.
- Match the `version` in `package.json` (but replace the underscore `_` by a dash `-` to comply with npm scheme, even if we do not publish to npm registry).

2. Execute `npm run build` to load the specified Ionic version files.
3. Make sure the version is automatically updated in `package-lock.json`.
4. Execute `meteor publish` (requires to be logged in your Meteor developer account).
5. Commit, tag, push.
6. Edit and release tag in GitHub.
