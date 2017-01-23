(function(){
  define(function(){
    var cellSize, svgRenderer, canvasRenderer;
    cellSize = 4;
    svgRenderer = {
      drawCell: function(pos, value, svg){
        var cell, grayValue;
        cell = svg.rect(pos.x * cellSize, pos.y * cellSize, cellSize, cellSize);
        grayValue = 256 - value * 256;
        return cell.attr({
          fill: "rgb(" + grayValue + "," + grayValue + "," + grayValue + ")"
        });
      },
      drawState: function(automata, svg){
        return map(function(pos){
          return svgRenderer.drawCell(pos, automata.densityAt(automata.cells, pos), svg);
        })(
        automata.positions);
      }
    };
    canvasRenderer = {
      drawCell: function(index, value, data){
        var grayValue;
        grayValue = Math.floor(255 - value * 255);
        data[index] = grayValue;
        data[index + 1] = grayValue;
        data[index + 2] = grayValue;
        return data[index + 3] = 255;
      },
      drawState: function(automata, context){
        var size, newCanvas, newCtx, canvasImage, imageData;
        size = automata.size;
        newCanvas = $("<canvas>").attr({
          "width": size.width,
          "height": size.height
        });
        newCtx = newCanvas[0].getContext("2d");
        canvasImage = newCtx.getImageData(0, 0, size.width, size.height);
        imageData = canvasImage.data;
        map(function(pos){
          var index;
          index = (pos.y * size.width + pos.x) * 4;
          return canvasRenderer.drawCell(index, automata.densityAt(automata.cells, pos), imageData);
        })(
        automata.positions);
        newCtx.putImageData(canvasImage, 0, 0);
        return context.drawImage(newCanvas[0], 0, 0);
      }
    };
    return {
      svgRenderer: svgRenderer,
      canvasRenderer: canvasRenderer
    };
  });
}).call(this);
