(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dzexstyle.css'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "* { margin: 0; padding: 0; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }\n  [role=\"note\"] { display: none; }\n  body {\n    width: ";
  if (stack1 = helpers.width) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px; height: ";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n    margin-left: -"
    + escapeExpression(helpers.x_size.call(depth0, 400, {hash:{},data:data}))
    + "px; margin-top: -"
    + escapeExpression(helpers.y_size.call(depth0, 300, {hash:{},data:data}))
    + "px;\n    position: absolute; top: 50%; left: 50%;\n    overflow: hidden;\n    display: none;\n  }\n  .view body {\n    position: static;\n    margin: 0; padding: 0;\n    width: 100%; height: 100%;\n    display: inline-block;\n    overflow: visible; overflow-x: hidden;\n    /* undo Dz.onresize */\n    transform: none !important;\n    -moz-transform: none !important;\n    -webkit-transform: none !important;\n    -o-transform: none !important;\n    -ms-transform: none !important;\n  }\n  .view head, .view head > title { display: block }\n  section {\n    position: absolute;\n    pointer-events: none;\n    width: 100%; height: 100%;\n  }\n  .view section {\n    pointer-events: auto;\n    position: static;\n    width: ";
  if (stack1 = helpers.width) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px; height: ";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px;\n    margin: -"
    + escapeExpression(helpers.y_size.call(depth0, 150, {hash:{},data:data}))
    + "px -"
    + escapeExpression(helpers.x_size.call(depth0, 200, {hash:{},data:data}))
    + "px;\n    float: left;\n\n    transform: scale(.4);\n    -moz-transform: scale(.4);\n    -webkit-transform: scale(.4);\n    -o-transform: scale(.4);\n    -ms-transform: scale(.4);\n  }\n  .view section > * { pointer-events: none; }\n  section[aria-selected] { pointer-events: auto; }\n  html { overflow: hidden; }\n  html.view { overflow: visible; }\n  body.loaded { display: block; }\n  .incremental {visibility: hidden; }\n  .incremental[active] {visibility: visible; }\n  #progress-bar{\n    bottom: 0;\n    position: absolute;\n    -moz-transition: width 400ms linear 0s;\n    -webkit-transition: width 400ms linear 0s;\n    -ms-transition: width 400ms linear 0s;\n    transition: width 400ms linear 0s;\n  }\n  .view #progress-bar {\n    display: none;\n  }";
  return buffer;
  });
})();