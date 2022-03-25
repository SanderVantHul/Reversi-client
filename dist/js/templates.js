Handlebars.registerPartial("fiche", Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<figure class=\"fiche fiche-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"color") || (depth0 != null ? lookupProperty(depth0,"color") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":36}}}) : helper)))
    + "\"></figure>";
},"useData":true}));
this["spa_templates"] = this["spa_templates"] || {};
this["spa_templates"]["templates"] = this["spa_templates"]["templates"] || {};
this["spa_templates"]["templates"]["feedbackWidget"] = this["spa_templates"]["templates"]["feedbackWidget"] || {};
this["spa_templates"]["templates"]["feedbackWidget"]["body"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"body\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"fiche"),depth0,{"name":"fiche","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</section>\r\n";
},"usePartial":true,"useData":true});