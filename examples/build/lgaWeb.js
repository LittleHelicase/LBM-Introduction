(function(){
  requirejs.config({
    baseUrl: "build",
    paths: {
      prelude: "../lib/prelude-browser"
    }
  });
  define(["automaton", "prelude"], function(Automaton){
    prelude.installPrelude(window);
    return Automaton;
  });
}).call(this);
