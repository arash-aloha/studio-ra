
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
