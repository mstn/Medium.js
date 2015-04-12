// package metadata file for Meteor.js
'use strict';


var packageName = 'mstn:mediumjs';
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
  name: packageName,
  summary: 'It makes contenteditable beautiful (Like Medium\'s editor)',
  version: 'PACKAGE_VERSION',
  git: 'https://github.com/mstn/Medium.js'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles([
    'bower_components/rangy-core.js',
    'bower_components/rangy-classapplier.js',
    'bower_components/undo.js',
    'medium.js',
    'medium.css',
    'meteor/export.js'
  ], where);
  api.export('Medium');
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('meteor/test.js', where);
});
