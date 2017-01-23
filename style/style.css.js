(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['style.css'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1;


  buffer += "html, .view body { background-color: black; counter-reset: slideidx; }\nbody, .view section { background-color: white; border-radius: 12px }\n/* A section is a slide. It's size is 800x600, and this will never change */\nsection, .view head > title {\n  /* The font from Google */\n  font-family: 'Roboto', serif;\n  font-weight: thin;\n  font-size: ";
  stack1 = helpers.x_size.call(depth0, 30, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\n\nsection > div {\n  margin-left: ";
  stack1 = helpers.x_size.call(depth0, 75, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\n\n.view section:after {\n  counter-increment: slideidx;\n  content: counter(slideidx, decimal-leading-zero);\n  position: absolute; bottom: -";
  stack1 = helpers.y_size.call(depth0, 80, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px; right: ";
  stack1 = helpers.x_size.call(depth0, 100, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  color: white;\n}\n\n.view head > title {\n  color: white;\n  text-align: center;\n  margin: 1em 0 1em 0;\n}\n\nh1 {\n  margin-top: ";
  stack1 = helpers.y_size.call(depth0, 200, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  text-align: center;\n  font-size: ";
  stack1 = helpers.font_size.call(depth0, 80, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\nh2 {\n  margin-top: ";
  stack1 = helpers.y_size.call(depth0, 100, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  text-align: center;\n  font-size: ";
  stack1 = helpers.font_size.call(depth0, 80, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\nh3 {\n  margin: ";
  stack1 = helpers.y_size.call(depth0, 100, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px 0 ";
  stack1 = helpers.y_size.call(depth0, 50, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px ";
  stack1 = helpers.x_size.call(depth0, 100, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\n\nul {\n    margin: ";
  stack1 = helpers.y_size.call(depth0, 50, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px ";
  stack1 = helpers.x_size.call(depth0, 80, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\nli > ul {\n  margin: ";
  stack1 = helpers.y_size.call(depth0, 15, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px ";
  stack1 = helpers.x_size.call(depth0, 50, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\nli {\n  margin-bottom: ";
  stack1 = helpers.y_size.call(depth0, 20, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\n\nol {\n    margin: ";
  stack1 = helpers.y_size.call(depth0, 50, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px ";
  stack1 = helpers.x_size.call(depth0, 80, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\nli > ol {\n  margin: ";
  stack1 = helpers.y_size.call(depth0, 15, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px ";
  stack1 = helpers.x_size.call(depth0, 50, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\n\np {\n  margin: ";
  stack1 = helpers.x_size.call(depth0, 75, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  font-size: ";
  stack1 = helpers.font_size.call(depth0, 50, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\n\nblockquote {\n  height: 100%;\n  background-color: black;\n  color: white;\n  font-size: ";
  stack1 = helpers.font_size.call(depth0, 60, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  padding: ";
  stack1 = helpers.x_size.call(depth0, 50, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\nblockquote:before {\n  content: open-quote;\n}\nblockquote:after {\n  content: close-quote;\n}\ncite {\n  background-color: black;\n  display: block;\n  width: ";
  stack1 = helpers.x_size.call(depth0, 700, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  text-align: right;\n  color: white;\n  font-size: ";
  stack1 = helpers.font_size.call(depth0, 15, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  position: relative;\n  top: -";
  stack1 = helpers.y_size.call(depth0, 80, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  margin-right: 50px;\n}\n\n/* Figures are displayed full-page, with the caption\n   on top of the image/video */\n   /*\nfigure {\n  background-color: black;\n  width: 100%;\n  height: 100%;\n}\nfigure > * {\n  position: absolute;\n}\nfigure > img, figure > video {\n  width: 100%; height: 100%;\n}\nfigcaption {\n  margin: ";
  stack1 = helpers.x_size.call(depth0, 70, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  font-size: ";
  stack1 = helpers.font_size.call(depth0, 50, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}*/\n\n.images > h3 {\n  margin: ";
  stack1 = helpers.y_size.call(depth0, 40, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px 0 ";
  stack1 = helpers.y_size.call(depth0, 30, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px ";
  stack1 = helpers.x_size.call(depth0, 100, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\n\n.images table {\n  margin-left: ";
  stack1 = helpers.x_size.call(depth0, 40, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\n\n.images td {\n  vertical-align: bottom;\n  text-align: center;\n  width: ";
  stack1 = helpers.x_size.call(depth0, 350, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  height: ";
  stack1 = helpers.y_size.call(depth0, 230, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n}\n\na {\n  color: #222;\n}\n\nfooter > a {\n  color: #ddd;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: ";
  stack1 = helpers.y_size.call(depth0, 5, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  text-align: right;\n  background-color: #444;\n  font-size: ";
  stack1 = helpers.font_size.call(depth0, 20, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  color:#eee;\n}\n\n/* Transition effect */\n/* Feel free to change the transition effect for original\n   animations. See here:\n   https://developer.mozilla.org/en/CSS/CSS_transitions\n   How to use CSS3 Transitions: */\n/*section {\n  -moz-transition: left 400ms linear 0s;\n  -webkit-transition: left 400ms linear 0s;\n  -ms-transition: left 400ms linear 0s;\n  transition: left 400ms linear 0s;\n}*/\n.view section {\n  -moz-transition: none;\n  -webkit-transition: none;\n  -ms-transition: none;\n  transition: none;\n}\n\n.view section[aria-selected] {\n  border: ";
  stack1 = helpers.x_size.call(depth0, 5, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px red solid;\n}\n\n/* Before */\nsection { left: -150%; }\n/* Now */\nsection[aria-selected] { left: 0; }\n/* After */\nsection[aria-selected] ~ section { left: +150%; }\n\n/* Incremental elements */\n\n/* By default, visible */\n.incremental > * { opacity: 1; }\n\n/* The current item */\n.incremental > *[aria-selected] { opacity: 1; }\n\n/* The items to-be-selected */\n.incremental > *[aria-selected] ~ * { opacity: 0; }\n\n/* The progressbar, at the bottom of the slides, show the global\n   progress of the presentation. */\n#progress-bar {\n  height: ";
  stack1 = helpers.y_size.call(depth0, 2, {hash:{},data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "px;\n  background: #AAA;\n}\n";
  return buffer;
  });
})();