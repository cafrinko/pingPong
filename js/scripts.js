//user interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var numInput = $("input#num").val();
    var list = []

    //business logic
    for (var i = 1; i <= numInput; i++) {
      if (i % 3 === 0) {
        list.push("ping");
        // $("#result").append('<li>'+"ping"+'</li>');
      } else if (i % 5 === 0) {
        list.push("pong");
        // $("#result").append('<li>'+"pong"+'</li>');
      } else if (i % 15 === 0) {
        list.push("pingpong");
        // $("#result").append('<li>'+"pingpong"+'</li>');
      } else {
        list.push(i);
        // $("#result").append('<li>'+i+'</li>');
      }
    }

    for (var j = 0; j <= list.length; i++)
      $("#result").text('<li>'+list(i)+'</li>')
      debugger

    $(".output").show();
  });
});
