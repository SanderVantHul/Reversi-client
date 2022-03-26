// deze helper functie geeft de mogelijkheid om optellingen in de {{each}} loop
// van de handlebars board template te doen
Handlebars.registerHelper("addCell", function(index, number) {
  return index + number;
});

Handlebars.registerHelper("getColor", function(number) {
  return (number == 1 || number == 3) ? "white" : "black";
});

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
this["spa_templates"]["templates"]["board"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":14,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"tile\" style=\"grid-area:r"
    + alias3((lookupProperty(helpers,"addCell")||(depth0 && lookupProperty(depth0,"addCell"))||alias2).call(alias1,(data && lookupProperty(data,"index")),1,{"name":"addCell","hash":{},"data":data,"loc":{"start":{"line":5,"column":40},"end":{"line":5,"column":60}}}))
    + "-c"
    + alias3((lookupProperty(helpers,"addCell")||(depth0 && lookupProperty(depth0,"addCell"))||alias2).call(alias1,(container.data(data, 1) && lookupProperty(container.data(data, 1),"index")),1,{"name":"addCell","hash":{},"data":data,"loc":{"start":{"line":5,"column":62},"end":{"line":5,"column":85}}}))
    + "; "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,depth0,{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":87},"end":{"line":5,"column":129}}})) != null ? stack1 : "")
    + "\">\r\n        <div class=\"tile-inner\">\r\n            <div class=\"tile-front\"></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,depth0,{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":10,"column":19}}})) != null ? stack1 : "")
    + "            <div class=\"tile-back\"></div>\r\n        </div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " pointer-events: none; ";
},"5":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <figure class=\"fiche fiche-"
    + container.escapeExpression((lookupProperty(helpers,"getColor")||(depth0 && lookupProperty(depth0,"getColor"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"getColor","hash":{},"data":data,"loc":{"start":{"line":9,"column":43},"end":{"line":9,"column":60}}}))
    + "\"></figure>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"board\">\r\n    <!-- tiles -->\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});
this["spa_templates"]["templates"]["feedbackWidget"] = this["spa_templates"]["templates"]["feedbackWidget"] || {};
this["spa_templates"]["templates"]["feedbackWidget"]["body"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"body\">\r\n    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"bericht") || (depth0 != null ? lookupProperty(depth0,"bericht") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bericht","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":15}}}) : helper)))
    + "\r\n</section>\r\n";
},"useData":true});