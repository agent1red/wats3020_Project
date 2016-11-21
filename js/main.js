$(window).scroll(function(){
    $(".text-center").css("opacity", 1 - $(window).scrollTop() / 250);
  });
$(window).scroll(function(){
    $(".carousel-inner").css("opacity", 1 - $(window).scrollTop() / 950);
  });
