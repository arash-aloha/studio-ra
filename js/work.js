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


