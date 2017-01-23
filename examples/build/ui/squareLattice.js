(function(){
  define(function(){
    var circleRadius, halfCircleDist, offsetArray, svgRenderer;
    circleRadius = 6;
    halfCircleDist = 6;
    offsetArray = [
      {
        x: 0,
        y: -halfCircleDist
      }, {
        x: halfCircleDist,
        y: 0
      }, {
        x: 0,
        y: halfCircleDist
      }, {
        x: -halfCircleDist,
        y: 0
      }
    ];
    return svgRenderer = {
      drawParticle: function(pos, value, svg){
        var particle;
        particle = svg.circle(circleRadius).move(pos.x, pos.y);
        switch (value) {
        case 0:
          return particle.fill({
            color: 'white'
          }).stroke({
            color: 'black'
          });
        default:
          return particle.fill({
            color: 'black'
          });
        }
      },
      drawCell: function(pos, cell, svg){
        var r;
        r = halfCircleDist;
        return map(function(idx){
          var o;
          o = offsetArray[idx];
          return svgRenderer.drawParticle({
            x: 25 * pos.x + o.x + 10,
            y: 25 * pos.y + o.y + 10
          }, cell[idx], svg);
        })(
        [0, 1, 2, 3]);
      },
      drawState: function(automata, svg){
        return map(function(pos){
          return svgRenderer.drawCell(pos, automata.valueAt(automata.cells, pos), svg);
        })(
        automata.positions);
      }
    };
  });
}).call(this);
