const images = [
  '/assets/Images/Work/Apartment_Fredhall/ApartmentFredhall01.webp',
  '/assets/Images/Work/Apartment_Fredhall/ApartmentFredhall02.webp',
  '/assets/Images/Work/Apartment_Fredhall/ApartmentFredhall03.webp',
  '/assets/Images/Work/Apartment_Fredhall/ApartmentFredhall04.webp',
]

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