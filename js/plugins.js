$(document).ready(function () {
  
  $("#list a").click(() => {
    $(".sub-menu").slideToggle(300);
    
    $(".rotate").toggleClass("down");

  });


});