/*var $button = $('#button');
var isMenuOpen = false;
$button.on('click', function () {
    isMenuOpen = !isMenuOpen;
    
    $button.attr('aria-expanded', isMenuOpen);
});
*/

/* https://codepen.io/stowball/pen/eBKvoO */ 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshowitem");
  /*var dots = document.getElementsByClassName("dot");*/
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); 
  }
  */ 
  slides[slideIndex-1].style.display = "block"; 
  /* dots[slideIndex-1].className += " active"; */ 
}


function myFunction() {
  var x = document.getElementById("siteTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}