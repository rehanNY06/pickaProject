let sIndex = 1;
showSlides(sIndex);

function plusSlides(n) {
    showSlides(sIndex += n);
  }

  function currentSlide(n) {
    showSlides(sIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("fading");
    if (n > slides.length) {sIndex = 1}
    if (n < 1) {sIndex = sIndex.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
     slides[sIndex-1].style.display = "block";
  }
