
const images = [
  '/assets/Images/Work/Barkarbystaden_Kv_15/07-Barkarbystden-red.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/16-Barkarbystaden15-3.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-006.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-049.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-058.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-065.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-066.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-105.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-107.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-111.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-113.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-122.webp',
  '/assets/Images/Work/Barkarbystaden_Kv_15/Barkaby-HIGH-128.webp',
];


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

