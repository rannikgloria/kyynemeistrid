var currentSlide = 1;

//näitab antud indeksiga slaidi
function showSlide(slideIndex) {
  //annab järjendi klassi elementidega
  const slides = document.getElementsByClassName('carouselImgs');
  //kui indeks liiga suur, alustab otsast peale
  if (slideIndex > slides.length) { currentSlide = 1 }
  //kui indeks liiga väike, läheb lõppu
  if (slideIndex < 1) { currentSlide = slides.length }
  //määrab vaate stiili
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex'
}

function nextSlide() {
  showSlide(currentSlide += 1);
}

function previousSlide() { 
  showSlide(currentSlide -= 1);
}

//akna laadimisel käivitab funktsiooni
window.onload = function () {
  showSlide(currentSlide);
  //eelmine slaid, kui vajutatakse tagasi nuppu
  document.getElementById('prev').addEventListener('click', function () {
    previousSlide();
  })
  //järgmine slaid, kui vajutatakse edasi nuppu
  document.getElementById('next').addEventListener('click', function () {
    nextSlide();
  })
}

// viide: https://dev.to/saravanakumarputta/js-snippets-carousel-slider-using-plain-html-css-and-js-5fjc