// scroll functions 

$(window).scroll(function(){
    $("#carousel1 > .text-center").css("opacity", 1 - $(window).scrollTop() / 250);
  });
$(window).scroll(function(){
    $("#carousel1 > .carousel-inner").css("opacity", 1 - $(window).scrollTop() / 850);
  });

function showArea(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

//  end scroll functions 

  // click event function 
  
    // searchbox input = variable tags 
    var tags = "cardgames";
    searchImages(tags);
     // prevent a reload of the page which causes null in search box 


  function searchImages(tags) {
    // create variable to shorten long API string 
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    //get tags from Flickr and datatype 

    $.getJSON(flickerAPI, {
        tags: tags,
        tagmode: "any",
        format: "json"
      })
      // after ajax do this bellow 
      .done(function(data) {
        $('#images').empty();
        //function for each items pulled from Flickr then return count and item 
        $.each(data.items, function(i, item) {
          var newList = $('<li class="item">'); // Creates new list with a class item in the HTML. Will be used for CSS styling as well 

          // setting list item to new list 

          $('<img>').attr("src", item.media.m).attr("title", item.title).attr("alt", item.description).appendTo(newList);

          $('<p></p>').text("Title : " + item.title).appendTo(newList);
          $('<p></p>').text("Date/Time : " + item.date_taken).appendTo(newList);
          $('<p></p>').text("Author : " + item.author).appendTo(newList);
          $('<a></a>').attr('href', item.link).text('View on Flickr.').appendTo(newList);


          // then appent the list to the image here
          newList.appendTo("#images");
          // after 10 pictures discontinue list 
          if (i === 2) {
            return false;
          }
        });
      });
  }
  // I changed the footer text with Jquery.
 

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showArea('.sellArea , .table , .image-title, , #images, footer');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showArea('.sellArea, .table , .image-title, #images, footer');
});
