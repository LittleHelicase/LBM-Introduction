(function(){
  define(function(){
    var fixedCellSize, fixedCircleRadius, halfCircleDist, offsetArray, svgRenderer;
    fixedCellSize = 20;
    fixedCircleRadius = 3;
    halfCircleDist = 6;
    offsetArray = [
      {
        x: 0,
        y: -1
      }, {
        x: 1,
        y: 0
      }, {
        x: 0,
        y: 1
      }, {
        x: -1,
        y: 0
      }
    ];
    return svgRenderer = {
      drawParticle: function(pos, value, svg, cr){
        var particle;
        particle = svg.circle(pos.x, pos.y, cr);
        switch (value) {
        case 0:
          return particle.attr({
            fill: 'white',
            stroke: 'black'
          });
        default:
          return particle.attr({
            fill: 'black'
          });
        }
      },
      drawCell: function(pos, cell, svg, cs, cr){
        var r;
        r = halfCircleDist;
        map(function(idx){
          var o, newPos;
          o = offsetArray[idx];
          newPos = {
            x: cs * pos.x + o.x * cr * 2 + cs / 2,
            y: cs * pos.y + o.y * cr * 2 + cs / 2
          };
          return svgRenderer.drawParticle(newPos, cell[idx], svg, cr);
        })(
        [0, 1, 2, 3]);
      },
      drawState: function(automata, svg, cellSize, circleRadius){
        if (cellSize == null) {
          cellSize = fixedCellSize;
        }
        if (circleRadius == null) {
          circleRadius = fixedCircleRadius;
        }
        return map(function(pos){
          return svgRenderer.drawCell(pos, automata.valueAt(automata.cells, pos), svg, cellSize, circleRadius);
        })(
        automata.positions);
      }
    };
  });
}).call(this);
