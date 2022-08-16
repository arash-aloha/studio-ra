const images = [
  '/assets/Images/Work/Autogyron_Orebro/Autogyron01.webp',
  '/assets/Images/Work/Autogyron_Orebro/Autogyron02.webp',
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