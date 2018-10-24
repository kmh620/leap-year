var leapYear = function(year) {
  if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function(){
  $("#leap-year").submit(function(){
    event.preventDefault();
    var year = $("#year").val();
    var result = leapYear(year);

    if (!result) {
      $("#results").text("Not a leap year");
    } else {
      $("#results").text("It's a leap year!");
    }
  });
});
