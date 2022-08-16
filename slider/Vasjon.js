const images = [
  '/assets/Images/Work/Vasjon/Vasjon01.webp',
  '/assets/Images/Work/Vasjon/Vasjon02.webp',
  '/assets/Images/Work/Vasjon/Vasjon03.webp',
  '/assets/Images/Work/Vasjon/Vasjon04.webp',
  '/assets/Images/Work/Vasjon/Vasjon05.webp',
]

const sliderImage = document.querySelector(".sliderImage");
const carouselContainer = document.querySelector(".carouselContainer");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let i = 0;

nextBtn.addEventListener("click", () => {
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
