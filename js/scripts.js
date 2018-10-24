$(document).ready(function(){
  $("#leap-year").submit(function(){
    event.preventDefault();
    var year = $("#year").val();

    if (year % 100 === 0 && year % 400 === 0) {
      $("#results").text("true")
    } else if (year % 100 === 0) {
      $("#results").text("false")
    } else if (year % 4 === 0) {
      $("#results").text("true")
    } else {
      $("#results").text("false")
    }

  });
});
