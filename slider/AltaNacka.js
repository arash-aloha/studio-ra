import { handleGesture } from "../js/swiper.js";

const images = [
  '/assets/Images/Work/Alta-Nacka/Alta01.webp',
  '/assets/Images/Work/Alta-Nacka/Alta02.webp',
  '/assets/Images/Work/Alta-Nacka/Alta03.webp',
];

const sliderImage = document.querySelector(".sliderImage");
const carouselContainer = document.querySelector(".carouselContainer");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let i = 0;

export const checkImageOrder = () => {
  while (images.length) {
    if (i >= images.length-1) i = -1;
      i++;
      return setImage();
  }

  while (i <= 0) {
    if(i <= 0) i = images.length;
    i--;
    return setImage();
  }
}


nextBtn.addEventListener("click", () => {
  // if ( i >= images.length-1) i = -1;
  // i++;
  // return setImage();
  checkImageOrder();
});

prevBtn.addEventListener("click", () => {
  // if(i <= 0) i = images.length;
  // i--;
  // return setImage();
  checkImageOrder();
});

const setImage = () => {
  return sliderImage.setAttribute("src", images[i]);
}
