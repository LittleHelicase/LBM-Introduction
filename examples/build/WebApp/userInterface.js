(function(){
  define(function(){
    var InizializerControlID, StepCounterID, RedrawControlID, initialize;
    InizializerControlID = "initializer__webApp";
    StepCounterID = "stepCounter__webApp";
    RedrawControlID = "redrawControl__webApp";
    initialize = function(impl){
      var steps, redrawEvery, animId, atm, initializer, options, updateVisual, updateSimulation, domElement, simulate, animatedSimulation, start, stop, step, initializeCallbacks, createButton, initializeButtons, createInitializer, initializeSelectControl, updateControlViews, createRedrawControl, createStepCounter, initializeControls;
      steps = 0;
      redrawEvery = 1;
      animId = null;
      atm = impl.automaton;
      initializer = impl.App.initializer;
      options = impl.App.initializeOptions;
      updateVisual = impl.App.updateVisual;
      updateSimulation = impl.App.updateSimulation;
      domElement = impl.App.domElement;
      simulate = function(){
        atm = updateSimulation(atm);
        if (steps % redrawEvery === 0) {
          updateVisual(atm);
        }
        steps = steps + 1;
        return updateControlViews();
      };
      animatedSimulation = function(){
        simulate();
        if (animId) {
          return animId = requestAnimationFrame(animatedSimulation);
        }
      };
      start = function(){
        return animId = requestAnimationFrame(animatedSimulation);
      };
      stop = function(){
        if (animId) {
          cancelAnimationFrame(animId);
        }
        return animId = null;
      };
      step = function(){
        var re;
        re = redrawEvery;
        redrawEvery = 1;
        simulate();
        return redrawEvery = re;
      };
      initializeCallbacks = function(){
        var initializeName, initializeFunction;
        initializeName = jQuery("#" + InizializerControlID).val();
        initializeFunction = initializer[initializeName];
        atm.initialize(function(pos){
          return initializeFunction(atm.size, pos);
        });
        return updateVisual(atm);
      };
      createButton = function(label, onclick){
        var btn;
        btn = document.createElement("input");
        btn.type = "button";
        btn.value = label;
        btn.onclick = onclick;
        return btn;
      };
      initializeButtons = function(){
        var element, startBtn, stopBtn, stepBtn;
        element = $("#" + domElement);
        startBtn = createButton("Start", start);
        stopBtn = createButton("Stop", stop);
        stepBtn = createButton("Step", step);
        element.append(startBtn);
        element.append(stepBtn);
        return element.append(stopBtn);
      };
      createInitializer = function(){
        var element, initer;
        element = $("#" + domElement);
        initer = jQuery(document.createElement("select"));
        initer.attr("id", InizializerControlID);
        return initer;
      };
      initializeSelectControl = function(){
        var element, initializeSelect, initializeBtn;
        element = $("#" + domElement);
        initializeSelect = createInitializer();
        map(function(value){
          return initializeSelect.append(new Option(value, value));
        })(
        keys(options));
        element.append(initializeSelect);
        initializeBtn = createButton("Initialize", initializeCallbacks);
        element.append(initializeBtn);
        initializeSelect.change(initializeCallbacks);
        return jQuery("#" + RedrawControlID).change(function(){
          return redrawEvery = jQuery("#" + RedrawControlID).val();
        });
      };
      updateControlViews = function(){
        return jQuery("#" + StepCounterID).html(steps);
      };
      createRedrawControl = function(){
        var element, redrawControl;
        element = $("#" + domElement);
        element.append(" Redraw Every: ");
        redrawControl = jQuery(document.createElement("input"));
        redrawControl.attr({
          "id": RedrawControlID,
          "type": "number",
          "min": "1",
          "value": "1"
        });
        redrawControl.change(function(){
          return redrawEvery = jQuery("#" + RedrawControlID).val();
        });
        element.append(redrawControl);
        return element.append("frames");
      };
      createStepCounter = function(){
        var element;
        element = $("#" + domElement);
        return element.append("<br/>Steps: <span id='" + StepCounterID + "'>0</span>");
      };
      initializeControls = function(){
        steps = 0;
        initializeButtons();
        initializeSelectControl();
        createRedrawControl();
        createStepCounter();
        updateControlViews();
        return initializeCallbacks();
      };
      return initializeControls();
    };
    return function(implementation){
      if (typeof jQuery == 'undefined' || jQuery === null) {
        console.log("JQuery must be defined!");
        return;
      }
      return initialize(implementation);
    };
  });
}).call(this);
