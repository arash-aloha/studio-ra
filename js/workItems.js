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

const items = document.querySelectorAll(".work-item-anchor");
const workItemImage = document.getElementById("workItemImage");
const workItemImageContainer = document.getElementById("workItemImageContainer");


items.forEach(item => {
  item.addEventListener("mouseenter", (e) => {
    imageData = e.target.getAttribute('data-image');
    workItemImage.setAttribute("src", imageData);
    workItemImage.style.opacity = 1;
    workItemImage.style.transition = "opacity .75s linear";
    workItemImageContainer.style.opacity = 1;
  });
  // item.addEventListener('mousemove', (e) => {
  //   image.style.top = e.clientY + 'px'
  //   image.style.left = e.clientX + 'px'
  // })
  item.addEventListener("mouseleave", () => {
    workItemImage.setAttribute("src", "");
    workItemImage.style.opacity = 0;
    workItemImage.style.transition = "opacity .75s linear";
    workItemImageContainer.style.opacity = 0;
  });
});


