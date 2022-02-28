import $ from 'jquery';


$('#sec-1').addClass("active");

//smooth scrolling
$("#sec-1").click(function() {
           $('html, body').animate({
               scrollTop:        $("#portfolio-container").offset().top
           }, 1000);
        return false;
       });
      
      $("#sec-2").click(function() {
           $('html, body') .animate({
               scrollTop:        $("#two").offset().top
           }, 1000);
        return false;
       });
      
      $("#sec-3").click(function() {
           $(' html,body') .animate({
               scrollTop:        $("#about-container").offset().top
           }, 1000);
        return false;
       });
      
      $("#sec-4").click(function() {
        $(this).addClass("active");
           $('html,body ') .animate({
               scrollTop:        $("#contact-container").offset().top
           }, 1000);
        return false;
       });