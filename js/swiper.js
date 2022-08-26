const touchableElement = document.querySelector(".itemImagesContainer");
let touchstartX = "";
let touchendX = "";
let i = 0;


touchableElement.addEventListener('touchstart', (event) => {
  touchstartX = event.changedTouches[0].screenX;
  handleGesture();
}, false);

touchableElement.addEventListener('touchend', (event) => {
  touchendX = event.changedTouches[0].screenX;
  handleGesture();
}, false);


export function handleGesture() {
  if (touchendX < touchstartX) {
      console.log('Swiped Left');
  }

  if (touchendX > touchstartX) {
      console.log('Swiped Right');
  }
}
