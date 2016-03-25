$(document).ready(function() {
  $("form").submit(function(event) {

    var score= 0;

    var result= parseInt($("#season").val());
    score += result;
    var result= parseInt($("#food").val());
    score += result;
    var result= parseInt($("#budget").val());
    score += result;
    var result= parseInt($("#group").val());
    score += result;
    var result= parseInt($("#experience").val());
    score += result;


    if (score < 5) {
      alert("Please select an answer for each question.");
    } else if (score === 5) {
      $(".space").show();
    } else if (score > 5 && score <= 10) {
      $(".tropic").show();
    } else if (score > 10 && score <= 15) {
      $(".europe").show();
    } else {
      $(".mountain").show();
    }
    event.preventDefault();
  });
});

$(document).ready(function() {
  $("form").submit(function(event) {
    $(".results1").show();
    $(".userInfo").hide();
    $(".btn").hide();
    $(".backbtn").show();
    event.preventDefault();
  });
});
