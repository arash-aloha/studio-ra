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
    workItemImageContainer.classList.remove("fade");

  });
  // item.addEventListener('mousemove', (e) => {
  //   image.style.top = e.clientY + 'px'
  //   image.style.left = e.clientX + 'px'
  // })
  item.addEventListener("mouseleave", () => {
    //if img el is true, remove el
    while (workItemImageContainer.firstChild) {
      workItemImageContainer.removeChild(workItemImageContainer.firstChild);
    }
    workItemImageContainer.classList.remove("active");
    workItemImageContainer.classList.add("fade");
  });
});


