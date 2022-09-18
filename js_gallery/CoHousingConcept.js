const images = [
  '/assets/Images/Work/Co-housing-Concept/CoHousing01_thumb.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing02.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing03.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing04.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing05.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing06.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing07.webp',
  '/assets/Images/Work/Co-housing-Concept/CoHousing08.webp',

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



