// fade in hero 
const heroImg = document.getElementById("heroImg");
const heroText = document.getElementById("heroText");
const homePage = document.querySelector(".home");
const homeWrapper = document.querySelector(".home-wrapper");


const checkFirstVisit = () => {
  if(document.cookie.indexOf('mycookie')==-1) {
    // cookie doesn't exist, create it now    
    setTimeout(displayHome, 1200);
    setTimeout(displayImg, 1200);
    setTimeout(displayWrapper, 1600);
    setTimeout(displayScrollText, 1900);
    document.cookie = 'mycookie=1';
  }
  else {
    // not first visit, do nothing
    setTimeout(displayHome, 0);
    setTimeout(displayImg, 0);
    setTimeout(displayWrapper, 0);
    setTimeout(displayScrollText, 0);
  }
}

checkFirstVisit();

function displayWrapper() {
  homeWrapper.style.opacity = 1;
}
function displayHome() {
  homePage.style.opacity = 1;
}
function displayImg() {
  heroImg.style.opacity = 1;
}
function displayScrollText() {
  heroText.style.opacity = 1;
}
