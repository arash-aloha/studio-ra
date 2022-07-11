const containers = document.querySelectorAll(".work-item");

const items = document.querySelectorAll(".work-item-anchor");
const images = document.querySelectorAll(".work-item-image")
const workItemImage = document.getElementById("workItemImage");

console.log(workItemImage)


items.forEach(item => {
  item.addEventListener("mouseenter", (e) => {
    console.log("e", e.target)
    imageData = e.target.getAttribute('data-image');
    
    console.log("imageData: ", imageData);
    workItemImage.setAttribute("src", imageData)
  });
  // item.addEventListener('mousemove', (e) => {
  //   image.style.top = e.clientY + 'px'
  //   image.style.left = e.clientX + 'px'
  // })
  item.addEventListener("mouseleave", () => {
    workItemImage.setAttribute("src", "");
  });
});


