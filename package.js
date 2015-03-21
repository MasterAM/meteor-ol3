Package.describe({
    summary: "Wrapper for OpenLayers 3 (v3.3.0 released 2015-03-04)",
    version: "0.2.0",
    name: "alon:ol3",
    git: "https://github.com/masteram/meteor-ol3"
});

Package.onUse(function (api) {
    api.versionsFrom('1.0');
    api.addFiles([
        'lib/ol.js',
        'styles/ol.css'
    ], 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('alon:ol3');
    api.addFiles('tests.js');
});