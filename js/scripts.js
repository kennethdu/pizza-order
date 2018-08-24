//FRONTEND
$(document).ready(function(){
  $("form#orderSheet").submit(function(event){
    event.preventDefault();
    $("#hideResults").show();
    $("#hideForm").hide();
    var size = $("#size").val();
    var cheese = $("#cheese").val();
    var sauce = $("#sauce").val();
    var meat= $("#meat").val();
    var newPizza = new pizza(size, cheese, sauce, meat);
    $("#pizzaOrder").append("<p>" + newPizza.order() + "</p>")
    $("#pizzaPrice").text(newPizza.calculatePrice() + " dollars");
  })

  $("form#nameForm").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var address= $("#address").val();
    alert("Thank you for ordering " + name + "we will deliver shortly to " + address +"!!! Believe in it!!!");
  });
});

//BACKEND

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

pizza.prototype.calculatePrice = function ()
{
  return inputSize[this.size] + inputCheese[this.cheese] + inputSauce[this.sauce] + inputMeat[this.meat]
}

pizza.prototype.order = function() {
  return ("a " + this.size + ", " + this.cheese + ", " + this.sauce + ", " + this.meat + " pizza")
}
//This would only be necessary if someone had multiple pizzas ordered, so I know this is a redundunt


//This is my initial code until I realized we had to use a prototype to calculate the price. This would calculate the cost of multiple pizzas, so yes, I somehow came up with two solutions

// var ingredientPrices = {"small":10, "medium":14, "large":18, "no cheese":0, "average cheese":4, "extra cheese":6, "bbq":2, "sauce":2, "alfredo":2, "chicken":3, "pepperoni":2, "sardines":4}
// var total = 0;
// function calculatePrice(price) {
//   var inputArray = Object.values(price);
//   inputArray.forEach(function(totals){
//     total = total + ingredientPrices[totals];
//   });
//   return total
// };
