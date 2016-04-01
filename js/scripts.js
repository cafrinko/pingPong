function pingPong(num) {
  var list = []
  //for every index number from 1 to the inputted number
  for (var i = 1; i <= num; i++) {
    //if index is divisible by 3, add ping to list instead of the index
    if (i % 3 === 0) {
      list.push("<li>"+"ping"+"</li>");
      //if index is divisible by 5, add pong to list instead of the index
    } else if (i % 5 === 0) {
      list.push("<li>"+"pong"+"</li>");
      //if index is divisible by 15, add pingpong to list instead of the index
    } else if (i % 15 === 0) {
      list.push("<li>"+"pingpong"+"</li>");
      //otherwise, add the index number to list
    } else {
      list.push("<li>"+i+"</li>");
    }
  }
    return list.join(" ");
}

//user interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var numInput = $("input#num").val();
    var result = pingPong(numInput)
    // var result = pingPong(numInput);
//make an array of numbers from 1 to the inputted number

//for every index number from 0 to the end of the array of numbers
    $("#result").append(result);

    $(".output").show();
  });
});
