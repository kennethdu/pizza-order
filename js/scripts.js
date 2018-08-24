//FRONTEND
$(document).ready(function(){
  $("form#orderSheet").submit(function(event){
    event.preventDefault();
    var inputSize = $("#size").val();
    var inputCheese = $("#cheese").val();
    var inputSauce = $("#sauce").val();
    var inputMeat= $("#meat").val();
    var newPizza = new pizza(inputSize, inputCheese, inputSauce, inputCheese);
    var newPrice = calculatePrice(newPizza);
    alert(newPrice);
    $("#pizzaOrder").append("<li>" + inputSize + "</li>" + "<li>" + inputCheese + "</li>" + "<li>" + inputSauce + "</li>" + "<li>" + inputMeat + "</li>");
  });
});

//BACKEND

function pizza(size, cheese, sauce, meat, price) {
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.meat = meat;
  // this.price = 0;
}

function calculatePrice(price) {
  var ingredientPrices = {"small":10, "medium":14, "large":18, "noCheese":0, "avgCheese":4, "extraCheese":6, "bbq":2, "sauce":2, "alfredo":2, "chicken":3, "pepperoni":2, "sardines":4}
  var total = 0;
  var inputArray = Object.values(price);
  inputArray.forEach(function(totals){
    total = total + ingredientPrices[totals];
  });
  return total
};
