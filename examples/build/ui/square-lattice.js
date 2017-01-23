(function(){
  define(function(){
    return {
      drawState: function(automata, svg){
        return map(function(pos){
          return svg.rect(10, 10).move(12 * pos[0], 12 * pos[1]);
        })(
        automata.positions);
      }
    };
  });
}).call(this);
