const images = [
  '/assets/Images/Work/Vasjon/Vasjon01.webp',
  '/assets/Images/Work/Vasjon/Vasjon02.webp',
  '/assets/Images/Work/Vasjon/Vasjon03.webp',
  '/assets/Images/Work/Vasjon/Vasjon04.webp',
  '/assets/Images/Work/Vasjon/Vasjon05.webp',
]


import { nextImage, prevImage, swipedetect } from "../js/swiper.js";

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
var touchableElement = document.querySelector('.itemImagesContainer');


if (isMobile) {
  swipedetect(touchableElement, function(swipedir){
    if (swipedir =='left') {
      return nextImage(images);
    };
    
    if (swipedir == 'right') {
      return prevImage(images);
    };
  });
};


if(!isMobile) {
  nextBtn.addEventListener("click", () => {
    return nextImage(images)
  });
  
  prevBtn.addEventListener("click", () => {
    return prevImage(images)
  });
};




