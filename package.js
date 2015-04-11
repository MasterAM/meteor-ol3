Package.describe({
  summary: "An open-source JavaScript library to load, display and render maps from multiple sources on the web",
  version: "3.4.0",
  name: "alon:ol3",
  git: "https://github.com/masteram/meteor-ol3.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use("mizzao:build-fetcher@0.2.0");
  api.addFiles(['ol3.fetch.json'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use("mizzao:build-fetcher@0.2.0");
  api.use('alon:ol3');
  api.addFiles('tests.js');
});
