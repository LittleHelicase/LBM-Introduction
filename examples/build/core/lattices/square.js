(function(){
  define(function(){
    var top, right, bottom, left;
    top = 0;
    right = 1;
    bottom = 2;
    left = 3;
    return {
      create: curry$(function(defaultValue, arg$){
        var width, height, arr, i$, ref$, len$, i, subarr, j$, ref1$, len1$, j;
        width = arg$.width, height = arg$.height;
        arr = [];
        for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
          i = ref$[i$];
          subarr = [];
          for (j$ = 0, len1$ = (ref1$ = (fn1$())).length; j$ < len1$; ++j$) {
            j = ref1$[j$];
            subarr.push(defaultValue);
          }
          arr.push(subarr);
        }
        return arr;
        function fn$(){
          var i$, to$, results$ = [];
          for (i$ = 0, to$ = width - 1; i$ <= to$; ++i$) {
            results$.push(i$);
          }
          return results$;
        }
        function fn1$(){
          var i$, to$, results$ = [];
          for (i$ = 0, to$ = height - 1; i$ <= to$; ++i$) {
            results$.push(i$);
          }
          return results$;
        }
      }),
      directions: [top, right, bottom, left],
      positionValid: function(arg$, arg1$){
        var width, height, x, y;
        width = arg$.width, height = arg$.height;
        x = arg1$.x, y = arg1$.y;
        return (x >= 0 && x <= width - 1) && (y >= 0 && y <= height - 1);
      },
      access: function(arr, arg$){
        var x, y;
        x = arg$.x, y = arg$.y;
        return arr[x][y];
      },
      write: function(arr, arg$, value){
        var x, y;
        x = arg$.x, y = arg$.y;
        return arr[x][y] = value;
      },
      positions: function(arg$){
        var width, height, i, j;
        width = arg$.width, height = arg$.height;
        return flatten(
        (function(){
          var i$, ref$, len$, lresult$, j$, ref1$, len1$, results$ = [];
          for (i$ = 0, len$ = (ref$ = (fn$())).length; i$ < len$; ++i$) {
            i = ref$[i$];
            lresult$ = [];
            for (j$ = 0, len1$ = (ref1$ = (fn1$())).length; j$ < len1$; ++j$) {
              j = ref1$[j$];
              lresult$.push({
                x: i,
                y: j
              });
            }
            results$.push(lresult$);
          }
          return results$;
          function fn$(){
            var i$, to$, results$ = [];
            for (i$ = 0, to$ = width - 1; i$ <= to$; ++i$) {
              results$.push(i$);
            }
            return results$;
          }
          function fn1$(){
            var i$, to$, results$ = [];
            for (i$ = 0, to$ = height - 1; i$ <= to$; ++i$) {
              results$.push(i$);
            }
            return results$;
          }
        }()));
      },
      neighbor: function(position, direction){
        switch (direction) {
        case top:
          return {
            x: position.x,
            y: position.y - 1
          };
        case right:
          return {
            x: position.x + 1,
            y: position.y
          };
        case bottom:
          return {
            x: position.x,
            y: position.y + 1
          };
        case left:
          return {
            x: position.x - 1,
            y: position.y
          };
        }
      },
      borderDir: function(size, pos, neighborPos){
        var width, height, x, y, nx, ny, dir, dx, dy;
        width = size.width, height = size.height;
        x = pos.x, y = pos.y;
        nx = neighborPos.x;
        ny = neighborPos.y;
        dir = {
          x: nx - x,
          y: ny - y
        };
        dx = dir.x;
        dy = dir.y;
        if (dx < 0) {
          return left;
        } else if (dx > 0) {
          return right;
        } else if (dy < 0) {
          return top;
        } else if (dy > 0) {
          return bottom;
        }
      },
      reflect: function(value, dir){
        switch (dir) {
        case left:
          return [0, value[left], 0, 0];
        case right:
          return [0, 0, 0, value[right]];
        case top:
          return [0, 0, value[top], 0];
        case bottom:
          return [value[bottom], 0, 0, 0];
        }
      }
    };
  });
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
}).call(this);
