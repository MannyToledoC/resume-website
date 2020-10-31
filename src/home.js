




function splash(param) {
  var time = param;
  setTimeout(function () {
    $('#splash__background').fadeOut();
  }, time);

  setTimeout(function () {
    $('#nav').css({"visibility":"visible"});
  }, time);
  // use sessionStorage.setItem('splash','true');
}



window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        document.getElementById('nav').classList.add("nav__scrolled");
        document.getElementById('nav').classList.remove("nav__transparent");
    } 
    else {
        document.getElementById('nav').classList.add("nav__transparent");
        document.getElementById('nav').classList.remove("nav__scrolled");
    }
};

$(document).on('click', 'a[href^="#"]', function () {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});




function redirect (loc) {
  window.location.href = loc
}