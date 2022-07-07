const lightbox = document.createElement("div");
lightbox.id = "lightbox";

document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener("click", e => {
    //add class active to show overlay
    lightbox.classList.add("active");
    //create img element
    const img = document.createElement('img');
    //set image src to clicked image
    img.src = image.src;
    
    const html = `
      <div>
      <button> close </button>
        <img src=${img.src} >
      </div>
    `;
    
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.innerHTML = html;
  });
});

lightbox.addEventListener("click", e => {
  if(e.target !== e.currentTarget) return
    lightbox.classList.remove("active");
})

