//FRONTEND
$(document).ready(function(){
  $("form#orderSheet").submit(function(event){
    event.preventDefault();
    $("#hideResults").show();
    var size = $("#size").val();
    var cheese = $("#cheese").val();
    var sauce = $("#sauce").val();
    var meat= $("#meat").val();
    var newPizza = new pizza(size, cheese, sauce, meat);
    // var newPrice = calculatePrice(newPizza);
    $("#pizzaOrder").append("<p>" + newPizza.order() + "</p>")
    $("#pizzaPrice").text(newPizza.calculatePrice());
    $("#orderSheet").hide();
  })
  $("form#nameForm").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var address= $("#address").val();
    $("#submission").text("Thank you for ordering " + name + "we will deliver shortly to " + address);
  });
});

//BACKEND
// var ingredientPrices = {"small":10, "medium":14, "large":18, "no cheese":0, "average cheese":4, "extra cheese":6, "bbq":2, "sauce":2, "alfredo":2, "chicken":3, "pepperoni":2, "sardines":4}
// var total = 0;

var inputSize = {"small":10, "medium":14, "large":18};
var inputCheese = {"no cheese":1, "average cheese":4, "extra cheese":6};
var inputSauce = {"bbq":2, "sauce":2, "alfredo":2};
var inputMeat = {"chicken":3, "pepperoni":2, "sardines":4};

function pizza(size, cheese, sauce, meat) {
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.meat = meat;
}

pizza.prototype.order = function() {
  return ("a " + this.size + ", " + this.cheese + ", " + this.sauce + ", " + this.meat + " pizza")
}

pizza.prototype.calculatePrice = function ()
{
  return inputSize[this.size] + inputCheese[this.cheese] + inputSauce[this.sauce] + inputMeat[this.meat]
}
// function calculatePrice(price) {
//   var inputArray = Object.values(price);
//   inputArray.forEach(function(totals){
//     total = total + ingredientPrices[totals];
//   });
//   return total
// };
