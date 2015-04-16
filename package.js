Package.describe({
  summary: "An open-source JavaScript library to load, display and render maps from multiple sources on the web",
  version: "3.4.0",
  name: "alon:ol3-debug",
  git: "https://github.com/masteram/meteor-ol3.git",
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use("mizzao:build-fetcher@0.2.0");
  api.use("alon:ol3@3.4.0");
  api.addFiles(['reset_ol.js','ol3.fetch.json'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use("mizzao:build-fetcher@0.2.0");
  api.use('alon:ol3');
  api.addFiles('tests.js');
});
