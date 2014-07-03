define(['handlebars'], function(Handlebars) {

this["redbee-site"] = this["redbee-site"] || {};
this["redbee-site"]["Templates"] = this["redbee-site"]["Templates"] || {};

this["redbee-site"]["Templates"]["screen/home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Congratulation! Your theme is setup properly.\n";
  });

return this["redbee-site"]["Templates"];

});