$(document).ready(function(){
  $("form#orderSheet").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    var cheese = $("#cheese").val();
    var sauce = $("#sauce").val();
    var meat= $("#meat").val();
    $("#pizzaOrder").append("<li>" + size + "</li>" + "<li>" + cheese + "</li>" + "<li>" + sauce + "</li>" + "<li>" + meat + "</li>");

  });
});
