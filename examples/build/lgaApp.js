(function(){
  var requirejs;
  requirejs = require("../node_modules/.bin/r.js");
  requirejs.config({
    nodeRequire: require,
    paths: {
      'buggyJS': "../buggyJS",
      'lib': "../lib",
      'livescript': "../lib/livescript",
      'ls': "../lib/ls",
      'prelude': "../lib/prelude-browser"
    }
  });
  requirejs(['automaton', 'rule'], function(Automaton){
    return console.log('ready');
  });
}).call(this);
