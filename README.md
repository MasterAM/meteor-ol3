meteor-ol3
==========

This package adds the files necessary to use OpenLayers 3 in a Meteor.js application.

It fetches (using the `mizzao:build-fetcher` package) the files from _cdnjs.cloudflare.com_, a CDN used by OpenLayers themselves in their examples.

At the moment it simply provides the `ol` symbol on the client and the necessary stylesheets.

The current version is based on OpenLayers [v3.9.0](https://github.com/openlayers/ol3/releases/tag/v3.9.0) release, and now the package version matches the OpenLayers version.

Installation
---

```sh
$ meteor add alon:ol3
```

There are currently no real tests.

If you think of any useful functionality or have any problems with the package, don't hesitate to open an issue.
