
function initializeMathjax(){
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$','$'], ['\\(','\\)']],
            processEscapes: true
        }
    });
    MathJax.Hub.Config({
        "HTML-CSS": {
            scale: 120
        }
    });
}


function loadMathjax(JQ){
    JQ.getScript("scripts/mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML")
        .done(function(script, status){
            console.log("successfully loaded local mathjax");
            initializeMathjax();
        })
        .fail(function(script, status){
            JQ.getScript("http://cdn.mathjax.org/mathjax/1.1-latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML")
                .done(function(){
                    console.log("online mathjax loaded successfully");
                    initializeMathjax();
                })
                .fail(function(){
                    console.log("unable to load local or online mathjax");
                });
        });
}