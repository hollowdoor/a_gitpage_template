let Metalsmith = require('metalsmith');
let markdown = require('metalsmith-markdown');
let layouts = require('metalsmith-layouts');

Metalsmith(__dirname)          // instantiate Metalsmith in the cwd
  .source('source')        // specify source directory
  .destination('docs')     // specify destination directory
  .clean(false)
  .use(markdown())             // transpile markdown into html
  .use(layouts({               // wrap a handlebars-layout
    engine: 'handlebars'       // around transpiled html-files
  }))
  .build(function(err) {       // this is the actual build process
    if (err) throw err;    // throwing errors is required
  });
