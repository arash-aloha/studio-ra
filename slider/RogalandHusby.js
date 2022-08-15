const images = [
  '/assets/Images/Work/RogalandHusby/Rogaland01.webp',
  '/assets/Images/Work/RogalandHusby/Rogaland02.webp',
  '/assets/Images/Work/RogalandHusby/Rogaland03.webp',
]

const sliderImage = document.querySelector(".sliderImage");
const carouselContainer = document.querySelector(".carouselContainer");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let i = 0;

nextBtn.addEventListener("click", () => {
  if ( i >= images.length-1) i = -1;
  i++;
  sliderImage.style.transition = "visible 1s";
  carouselContainer.style.transition = "visible 1s";
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