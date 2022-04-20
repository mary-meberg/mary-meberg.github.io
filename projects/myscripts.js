var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

var projectIndex = 0;
showProjects();

function showProjects() {
  var i;
  var slides = document.getElementsByClassName("slides")
  var slide1 = document.getElementById("slide1")
  var slide2 = document.getElementById("slide2")
  var slide3 = document.getElementById("slide3")

  if (window.location.href == "https://mary-meberg.github.io/projects/index.html#no-js-slider-1") {
  console.log("match") 
  slide2.style.visibility='hidden'
    slide3.style.visibility='hidden' 
  } 
  
  if (window.location.href == "https://mary-meberg.github.io/projects/index.html#no-js-slider-2"){
    console.log("match")  
  slide1.style.visibility='hidden'
    slide3.style.visibility='hidden' 
  }

  if (window.location.href == "https://mary-meberg.github.io/projects/index.html#no-js-slider-3"){
    console.log("match")  
  slide1.style.visibility='hidden'
    slide2.style.visibility='hidden' 
  }


}