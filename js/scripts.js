//user interface logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var numInput = $("input#num").val();
    //business logic
    for (var i = 1; i <= numInput; i++) {
      if (i % 3 === 0) {
        $("#result").append('<li>'+"ping"+'</li>');
      } else if (i % 5 === 0) {
        $("#result").append('<li>'+"pong"+'</li>');
      } else if (i % 15 === 0) {
        $("#result").append('<li>'+"pingpong"+'</li>');
      } else {
        $("#result").append('<li>'+i+'</li>');
      }
    }
    $("#result").show();
  });
});
