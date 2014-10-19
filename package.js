Package.describe({
  summary: "Wrapper for OpenLayers 3",
  version: "0.1.0",
  name: "alon:ol3",
  git: "https://github.com/masteram/meteor-ol3"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles(['lib/ol.js', 'styles/ol.css'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('alon:ol3');
  api.addFiles('tests.js');
});
