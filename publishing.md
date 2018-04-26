## Publish the package

1. Make sure the Ionic lib version in `package.json` devDependencies is accurate.
2. Make sure the package version in `package.js` is accurate (rollback to empty wrap number when changing Ionic version).
3. Execute `npm run build` to load the specified Ionic version files.
4. Match the `version` in `package.json` (but replace the underscore `_` by a dot `.` to comply with npm scheme, even if we do not publish to npm registry).
5. Make sure the version is updated in `package-lock.json`.
6. Match the version in `.versions`.
7. Execute `meteor publish` (requires to be logged in your Meteor developer account).
8. Commit, tag, push.
9. Edit and release tag in GitHub.
