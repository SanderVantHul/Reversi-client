// deze helper functie geeft de mogelijkheid om optellingen in de {{each}} loop
// van de handlebars board template te doen
Handlebars.registerHelper("addCell", function (index, number) {
  return index + number;
});

Handlebars.registerHelper("getColor", function (number) {
  return (number === 1 || number === 3) ? "white" : "black";
});

Handlebars.registerHelper("notFiveOrZero", function (number) {
  return number !== 0 && number !== 5;
});

Handlebars.registerHelper("equalToFive", function (number) {
  return number === 5;
});

Handlebars.registerHelper("newFiche", function (number) {
  return number === 3 || number === 4;
});

Handlebars.registerHelper("getAnimation", function (number) {
  return number === 3 ? "animationWhite" : "animationBlack";
});
