Package.describe({
  name: "vulcan:forms",
  summary: "Form containers for React",
  version: '1.8.10',
  git: "https://github.com/meteor-utilities/react-form-containers.git"
});

Package.onUse(function(api) {

  api.versionsFrom('1.6.1');

  api.use([
    'vulcan:core@1.8.10',

    'fourseven:scss@4.5.0'
  ]);

  api.addFiles([
    "lib/stylesheets/style.scss",
    "lib/stylesheets/datetime.scss"
  ], "client");

  api.mainModule("lib/client/main.js", ["client"]);
  api.mainModule("lib/server/main.js", ["server"]);

});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'tinytest',
    'vulcan:forms'
  ]);

});
