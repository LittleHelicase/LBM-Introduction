
// uses the Dz instance, the standard dzStyle Template
// and the costumized template to load the necessary css files
// it calculates style specific measures, creates the handlebar context
// and uses the given load function to load the css
function loadCss(Dz, dzstyle, templateStyle, load){
    context = {
        width: Dz.width,
        height: Dz.height
    };

    Handlebars.registerHelper('x_size', function(x){
        return x * Dz.width/800;
    });

    Handlebars.registerHelper('y_size', function(y){
        return y * Dz.height/600;
    });

    Handlebars.registerHelper('font_size', function(f){
        return f * Dz.width/800;
    });

    dzcss = dzstyle(context);
    tmpltcss = templateStyle(context);
    load(dzcss + "\n" + tmpltcss);
}