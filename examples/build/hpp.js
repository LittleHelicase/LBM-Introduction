(function(){
  define(["core/lattices/square"], function(SquareLattice){
    var hpp;
    return hpp = {
      createLattice: SquareLattice.create([0, 0, 0, 0]),
      directions: SquareLattice.directions,
      positions: SquareLattice.positions,
      positionValid: SquareLattice.positionValid,
      neighbor: SquareLattice.neighbor,
      border: function(lattice, size, pos, neighbor){
        var dir, cellValue;
        dir = SquareLattice.borderDir(size, pos, neighbor);
        cellValue = SquareLattice.access(lattice, pos);
        return SquareLattice.reflect(cellValue, dir);
      },
      valueAt: function(arg$){
        var width, height;
        width = arg$.width, height = arg$.height;
        return SquareLattice.access;
      },
      setValueAt: SquareLattice.write,
      densityAt: function(lattice, pos){
        return 0.25 * sum(
        SquareLattice.access(lattice, pos));
      },
      createCollisionRule: function(){
        return function(neighborhood, cell){
          if (deepEq$(cell, [1, 0, 1, 0], '===')) {
            return [0, 1, 0, 1];
          } else if (deepEq$(cell, [0, 1, 0, 1], '===')) {
            return [1, 0, 1, 0];
          } else {
            return [cell[0], cell[1], cell[2], cell[3]];
          }
        };
      },
      createPropagationRule: function(){
        return function(neighborhood, cell){
          return [neighborhood[2][0], neighborhood[3][1], neighborhood[0][2], neighborhood[1][3]];
        };
      }
    };
  });
  function deepEq$(x, y, type){
    var toString = {}.toString, hasOwnProperty = {}.hasOwnProperty,
        has = function (obj, key) { return hasOwnProperty.call(obj, key); };
    var first = true;
    return eq(x, y, []);
    function eq(a, b, stack) {
      var className, length, size, result, alength, blength, r, key, ref, sizeB;
      if (a == null || b == null) { return a === b; }
      if (a.__placeholder__ || b.__placeholder__) { return true; }
      if (a === b) { return a !== 0 || 1 / a == 1 / b; }
      className = toString.call(a);
      if (toString.call(b) != className) { return false; }
      switch (className) {
        case '[object String]': return a == String(b);
        case '[object Number]':
          return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
        case '[object Date]':
        case '[object Boolean]':
          return +a == +b;
        case '[object RegExp]':
          return a.source == b.source &&
                 a.global == b.global &&
                 a.multiline == b.multiline &&
                 a.ignoreCase == b.ignoreCase;
      }
      if (typeof a != 'object' || typeof b != 'object') { return false; }
      length = stack.length;
      while (length--) { if (stack[length] == a) { return true; } }
      stack.push(a);
      size = 0;
      result = true;
      if (className == '[object Array]') {
        alength = a.length;
        blength = b.length;
        if (first) { 
          switch (type) {
          case '===': result = alength === blength; break;
          case '<==': result = alength <= blength; break;
          case '<<=': result = alength < blength; break;
          }
          size = alength;
          first = false;
        } else {
          result = alength === blength;
          size = alength;
        }
        if (result) {
          while (size--) {
            if (!(result = size in a == size in b && eq(a[size], b[size], stack))){ break; }
          }
        }
      } else {
        if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) {
          return false;
        }
        for (key in a) {
          if (has(a, key)) {
            size++;
            if (!(result = has(b, key) && eq(a[key], b[key], stack))) { break; }
          }
        }
        if (result) {
          sizeB = 0;
          for (key in b) {
            if (has(b, key)) { ++sizeB; }
          }
          if (first) {
            if (type === '<<=') {
              result = size < sizeB;
            } else if (type === '<==') {
              result = size <= sizeB
            } else {
              result = size === sizeB;
            }
          } else {
            first = false;
            result = size === sizeB;
          }
        }
      }
      stack.pop();
      return result;
    }
  }
}).call(this);
