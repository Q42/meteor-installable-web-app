Package.describe({
  name: 'q42:installable-web-app',
  summary: 'Make your app installable to the home screen',
  version: '0.0.1',
  documentations: 'README.md',
  git: 'https://github.com/Q42/meteor-installable-web-app'
});

Package.onUse(function(api) {
  api.use('appcache');
  api.use('ground:db');

  api.addFiles('installable-web-app.js', 'server');

  if (typeof api.export !== 'undefined') {
    api.use('webapp', 'server');
  }
});

Npm.depends({
  'connect-inject': '0.4.0'
});
