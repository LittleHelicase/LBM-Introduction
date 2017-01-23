(function(){
  define(function(){
    return {
      createRule: function(ruleArray){
        return {
          rule: ruleArray,
          isSymmetric: false
        };
      },
      createSymmetricRule: function(ruleArray){
        return {
          rule: ruleArray,
          isSymmetric: true
        };
      },
      applyRule: function(neighbourhood, rule){
        return console.log('blubbs');
      }
    };
  });
}).call(this);
