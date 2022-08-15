const images = [
  '/assets/Images/Work/Portkvarteren/Portkvarteren01.webp',
  '/assets/Images/Work/Portkvarteren/Portkvarteren02.webp',
  '/assets/Images/Work/Portkvarteren/Portkvarteren03.webp',
  '/assets/Images/Work/Portkvarteren/Portkvarteren04.webp',
  '/assets/Images/Work/Portkvarteren/Portkvarteren04.webp',
]


const sliderImage = document.querySelector(".sliderImage");
const carouselContainer = document.querySelector(".carouselContainer");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let i = 0;

nextBtn.addEventListener("click", () => {
  // sliderImage.style.transition = "transform 1s ease-in-out 1s";
  // carouselContainer.style.transition = "transform 0.5s ease-in-out 1s";
  if ( i >= images.length-1) i = -1;
  i++;
  return setImage();
});

prevBtn.addEventListener("click", () => {
  if(i <= 0) i = images.length;
  i--;
  return setImage() ;
});


const setImage = () => {
  return sliderImage.setAttribute("src", images[i]);
}
