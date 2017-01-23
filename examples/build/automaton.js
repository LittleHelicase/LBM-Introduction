(function(){
  define(function(){
    var automaton;
    return automaton = {
      createAutomaton: function(size, type){
        var cells, positions, atm;
        cells = type.createLattice(size);
        positions = type.positions(size);
        return atm = {
          size: size,
          cells: cells,
          positions: positions,
          valueAt: type.valueAt(size),
          densityAt: type.densityAt,
          neighborsOf: function(position){
            return map(function(dir){
              return type.neighbor(position, dir);
            })(
            type.directions);
          },
          initialize: function(initfunction){
            return map(function(pos){
              var cellValue;
              cellValue = initfunction(pos);
              type.setValueAt(cells, pos, cellValue);
            })(
            positions);
          },
          neighborsWithNeighbors: function(pos){
            var neighborPositions, neighbors;
            neighborPositions = atm.neighborsOf(pos);
            neighbors = map(function(p){
              if (!type.positionValid(size, p)) {
                return type.border(atm.cells, size, pos, p);
              } else {
                return atm.valueAt(atm.cells, p);
              }
            })(
            neighborPositions);
            return neighbors;
          },
          collide: function(){
            var cRule, newAutomaton;
            cRule = type.createCollisionRule();
            newAutomaton = automaton.createAutomaton(size, type);
            newAutomaton.initialize(function(pos){
              var neighbors;
              neighbors = atm.neighborsWithNeighbors(pos);
              return cRule(neighbors, atm.valueAt(cells, pos));
            });
            return newAutomaton;
          },
          propagate: function(){
            var pRule, newAutomaton;
            pRule = type.createPropagationRule();
            newAutomaton = automaton.createAutomaton(size, type);
            newAutomaton.initialize(function(pos){
              var neighbors;
              neighbors = atm.neighborsWithNeighbors(pos);
              return pRule(neighbors, atm.valueAt(cells, pos));
            });
            return newAutomaton;
          },
          evolve: function(){
            var atm2;
            atm2 = atm.collide();
            return atm2.propagate();
          }
        };
      }
    };
  });
}).call(this);
