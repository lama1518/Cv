// function to open/close nav
function toggleNav(){
    if($("nav").is(":visible")){
      $("nav").fadeOut();
      $("button").removeClass("menu");
    }
    else{
      $("button").addClass("menu");
      $("nav").fadeIn().css('display', 'flex');
      $("button.back-to-top-button").css('display', 'none')
    }
  }

  $("button.menu_laterale").click(function(){
    if($("header").hasClass("open")){
      toggleNav();
    }
    else{
      $("header").addClass("open");
    }
  });
  
  $("#nav-close").click(function(){
    toggleNav();
  });
  
  $("nav li").click(function(){

    var index = $(this).index();
    var target = $("content section").eq(index);
    
    toggleNav();
    
    $('html,body').delay(300).animate({
      scrollTop: target.offset().top
    }, 500);
  });
  
  
