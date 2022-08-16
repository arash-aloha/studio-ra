const images = [
  '/assets/Images/Work/Co-housing-Concept/CoHousing01_thumb.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing02.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing03.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing04.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing05.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing06.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing07.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing08_thumb.webp',

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
