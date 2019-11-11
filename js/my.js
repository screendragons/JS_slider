// w3schools

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = x.length
//   }
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }

// tutorial
var slideIndex = 0;
showImage(slideIndex);
var dot_section = document.getElementsByClassName("dot_section");


function plusIndex(increment)
{
  // slideIndex += n;
  showImage(slideIndex += increment);
}

function currentSlide(slideNumber){
  // slideIndex = slideNumber;
  showImage(slideIndex = slideNumber);
}

function showImage(n){
  var slide = document.getElementsByClassName("slider-item");

  if (n > slide.length)
  {
    slideIndex = 1
  };

  if (n < 1)
  {
    slideIndex = slide.length
  };

  for (var i = 0; i < slide.length; i++)
  {
    slide[i].style.display = "none";
  }
  slide[slideIndex-1].style.display = "block";

  for (var i = 0; i < dot_section.length; i++) {
    dot_section[i].className = dot_section[i].className.replace("active", "");
  }

  dot_section[slideIndex-1].className += "active";

}

// var slideIndex = 0;

// var slide = document.getElementsByClassName("slider-item");
// var dot_section = document.getElementsByClassName("dot_section");

// showSlide(slideIndex);

// function plusSlides(increment) {
//   slideIndex += increment;
//   if (slideIndex > slide.length) {slideIndex = 0}
//   if (slideIndex < 0) {slideIndex = slide.length -1}
//   showSlide(slideIndex);
// }

// function currentSlide(slideNumber) {
//   slideIndex = slideNumber
//   showSlide(slideIndex);
// }

// function showSlide(currentSlideIndex) {
//   var i;
//   for (i = 0; i < slide.length; i++) {
//       slide[i].style.display = "none";
//       dot_section[i].className = dot_section[i].className.replace(" active", "");
//   }

//   slide[currentSlideIndex].style.display = "block";
//   dot_section[currentSlideIndex].className += " active";
// }


//man

// let slideIndex = 0;

// const showImage = () => {

//   const slide = document.getElementsByClassName("slider-item");
//   const dot_section = document.getElementsByClassName("dot_section");

//   for(let i = 0; i < slides.length; i++) {
//     slide[i].style.display = "none";
//   }

//   slideIndex++;

//   if(slideIndex > slides.length) {
//     slideIndex = 1
//   };

//   for (let i = 0 < dot_section.length; i++){
//     dot_section[i].className = dot_section[i].className.replace(" active", "");
//   }

//   slide[slideIndex -1].style.display = "block";
//   dot_section[slideIndex -1].className += "active";
// }

// showSlides();

