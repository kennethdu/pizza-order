//FRONTEND
$(document).ready(function(){
  $("form#orderSheet").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    var cheese = $("#cheese").val();
    var sauce = $("#sauce").val();
    var meat= $("#meat").val();
    var newPizza = new pizza(size, cheese, sauce, cheese);
    var newPrice = calculatePrice(newPizza);
    // alert(newPrice);
    $("#pizzaOrder").append("<li>" + size   + cheese  + sauce  + meat + "</li>");
    $("#pizzaPrice").text(newPrice);
  });
});

//BACKEND
var ingredientPrices = {"small":10, "medium":14, "large":18, "noCheese":0, "avgCheese":4, "extraCheese":6, "bbq":2, "sauce":2, "alfredo":2, "chicken":3, "pepperoni":2, "sardines":4}
var total = 0;

function pizza(size, cheese, sauce, meat, price) {
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.meat = meat;
}

function calculatePrice(price) {
  var inputArray = Object.values(price);
  inputArray.forEach(function(totals){
    total = total + ingredientPrices[totals];
  });
  return total
};
