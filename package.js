Package.describe({
  "summary": "meteor new relic integration",
  "name": "alex509:newrelic",
  "version": "1.0.4",
  "author": "Alexey Kuznetsov (https://github.com/Alex509)",
  "homepage": "https://github.com/Alex509/meteor-newrelic",
  "git": "https://github.com/Alex509/meteor-newrelic.git"
});

Npm.depends({
  "newrelic": "2.2.1",
  "@newrelic/native-metrics": "2.1.1",
  "cls-fibers": "1.1.1",
  "fibers": "1.0.15"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@1.3.1");
  if (api.export) 
  	api.export('newrelic', 'server');
  api.add_files('lib/server.js', 'server');
});

