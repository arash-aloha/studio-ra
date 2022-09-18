const images = [
  '/assets/Images/Work/MobileSauna/mobilesauna1.webp',
  '/assets/Images/Work/MobileSauna/mobilesauna2.webp',
  '/assets/Images/Work/MobileSauna/mobilesauna3.webp',
  '/assets/Images/Work/MobileSauna/mobilesauna4_thumb.webp',
  '/assets/Images/Work/MobileSauna/mobilesauna5_thumb.webp',
  '/assets/Images/Work/MobileSauna/mobilesauna6.webp',
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



