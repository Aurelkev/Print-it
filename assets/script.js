
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let actualSlider = 0;

const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const bannerImg = document.querySelector('.banner-img');


function showSlide() {
    const slide = slides[actualSlider];
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;
    console.log(`Image affichée : ${slide.image}`);
  }

  arrowLeft.addEventListener('click', function () {
    actualSlider--;
    if (actualSlider < 0) {
      actualSlider = 3;
    }
    showSlide();
  });

  arrowRight.addEventListener('click', function () {
    actualSlider++;
    if (actualSlider >= slides.length) {
      actualSlider = 0;
    }
    showSlide();
  });

  // Initialisation
  showSlide();
