$(window).scroll(function(){
    $("#carousel1 > .text-center").css("opacity", 1 - $(window).scrollTop() / 250);
  });
$(window).scroll(function(){
    $("#carousel1 > .carousel-inner").css("opacity", 1 - $(window).scrollTop() / 950);
  });
