WebApp.connectHandlers.use(
  Npm.require("connect-inject")({
    snippet: "<link rel=\"manifest\" href=\"/manifest.json\">",
    rules: [
      {
        match: /<\/head>/,
        fn: function(w, s) {
          return s + w;
        }
      }
    ]
  })
);
