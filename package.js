Package.describe({
  summary: "Define templates inside .md files.",
  version: '1.2.7',
  name: "simple:markdown-templating",
  git: "https://github.com/stubailo/meteor-markdown-templating"
});

// Today, this package is closely intertwined with Showdown and Spacebars
Package._transitional_registerBuildPlugin({
  name: "compileMarkdownTemplates",
  use: [
    'markdown@1.0.4',
    'spacebars-compiler@1.0.6',
    'underscore@1.0.3',
    'simple:highlight.js@1.0.9'
  ],
  sources: [
    'plugin/markdown-scanner.js',
    'plugin/compile-templates.js'
  ]
});

// This on_use describes the *runtime* implications of using this package.
Package.onUse(function (api) {
  api.versionsFrom("0.9.1");
  api.imply(['templating'], 'client');
});

Package.onTest(function (api) {
  api.use([
    "tinytest",
    "simple:markdown-templating",
    "underscore",
    "spacebars-compiler",
    "showdown"
  ]);

  api.addFiles([
    "plugin/markdown-scanner.js",
    "tests/tests.js"
  ], "server");

  api.addFiles([
    "tests/test.md"
  ], "server", {asset: true});
});
