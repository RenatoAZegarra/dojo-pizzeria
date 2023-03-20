function pizzaOven(type, sauce, cheese, toppings) {
  var pizza  = {};
  pizza.type = type;
  pizza.sauce = sauce;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}
var pizza1 = pizzaOven("deep-dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms", "olives","onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("margherita", "marinara", ["mozzarella","feta"], ["basil"]);
console.log(pizza3);

var pizza4 = pizzaOven("hand tossed", "tomato", "mozzerella", ["ham", "pineapple"]);
console.log(pizza4);

var type = ["deep-dish", "detriot-style", "hand tossed", "margherita", "calzone"];
var sauce = ["traditional", "marinara", "tomato", "pesto"];
var cheese = ["mozzarella", "feta","parmesan","provolone"];
var toppings = ["mushrooms", "olives", "onions", "pepperoni", "sausage", "ham", "pineapple", "basil"];

function randomPizza(type) {
  return Math.floor(Math.random()*type.length);
}
console.log(type[randomPizza(type)]);
function randomPizza(sauce) {
  return Math.floor(Math.random()*sauce.length);
}
console.log(sauce[randomPizza(sauce)]);
function randomPizza(cheese) {
  return Math.floor(Math.random()*cheese.length);
};
console.log(cheese[randomPizza(cheese)]);
function randomPizza(toppings) {
  return Math.floor(Math.random()*toppings.length);
};
console.log(toppings[randomPizza(toppings)]);

randomPizza(type, sauce, cheese, toppings);