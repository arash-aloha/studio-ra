const items = document.querySelectorAll(".work-item-anchor");
const workItemImage = document.getElementById("workItemImage");
const workItemImageContainer = document.getElementById("workItemImageContainer");


items.forEach(item => {
  item.addEventListener("mouseenter", (e) => {
    //get src for targeted image
    imageData = e.target.getAttribute('data-image');
    //create img el
    let largeImg = document.createElement("img");
    //set id
    largeImg.id = "workItemImage"
    //add src to img el
    largeImg.src = imageData;
    //append to container
    workItemImageContainer.appendChild(largeImg);
    workItemImageContainer.classList.add("active");
    // workItemImageContainer.style.opacity = 1;
    // workItemImageContainer.style.transition = "opacity 1s linear";
    // workItemImageContainer.style.opacity = 1;
  });
  // item.addEventListener('mousemove', (e) => {
  //   image.style.top = e.clientY + 'px'
  //   image.style.left = e.clientX + 'px'
  // })
  item.addEventListener("mouseleave", () => {
    while (workItemImageContainer.firstChild) {
      workItemImageContainer.removeChild(workItemImageContainer.firstChild);
    }
    workItemImageContainer.classList.remove("active");
    // workItemImageContainer.style.opacity = 0;
    // workItemImageContainer.style.transition = "opacity 1s linear";
  });
});


