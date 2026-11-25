// Bildspel

let slideIndex = 0;
showSlides(slideIndex);

// Visar nästa eller förra bild
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");

  if (slides.length == 0) {
    return;
  }

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // gömmer alla bilder
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // visar bara en bild
  slides[slideIndex].style.display = "block";
}

// Byter bild automatiskt var 5:e sekund
setInterval(function () {
  plusSlides(1);
}, 5000);
