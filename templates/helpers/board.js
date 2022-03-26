// deze helper functie geeft de mogelijkheid om optellingen in de {{each}} loop
// van de handlebars board template te doen
Handlebars.registerHelper("addCell", function(index, number) {
  return index + number;
});

Handlebars.registerHelper("getColor", function(number) {
  return (number == 1 || number == 3) ? "white" : "black";
});
