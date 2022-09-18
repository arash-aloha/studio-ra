const images = [
  '/assets/Images/Work/Apartment_Fredhall/ApartmentFredhall01.webp',
  '/assets/Images/Work/Apartment_Fredhall/ApartmentFredhall02.webp',
  '/assets/Images/Work/Apartment_Fredhall/ApartmentFredhall03.webp',
  '/assets/Images/Work/Apartment_Fredhall/ApartmentFredhall04.webp',
]

import { nextImage, prevImage, swipedetect } from "../js/swiper.js";

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
var touchableElement = document.querySelector('.itemImagesContainer');


console.log(isMobile)

if (isMobile) {
  
swipedetect(touchableElement, function(swipedir){
  if (swipedir =='left') {
    console.log("Swiped left")
    return nextImage(images);
  };
  
  if (swipedir == 'right') {
    console.log("You swiped right")
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