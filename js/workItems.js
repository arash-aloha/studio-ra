
const images = document.querySelectorAll("img");
const largeImgContainer = document.querySelector(".lg-image-container");
let targetImage = document.getElementById("targetImage");

images.forEach(image => {
  image.addEventListener("mouseenter", (e) => {
    //leave last hovered image visable
    while (largeImgContainer.firstChild) {
      largeImgContainer.removeChild(largeImgContainer.firstChild);
    }

    //get src for targeted image
    imageData = e.target.getAttribute('src');
    //create img el
    let largeImg = document.createElement("img");
    //add src to img el
    largeImg.src = imageData;
    //append to container
    largeImgContainer.appendChild(largeImg);
    
  });
});

// images.forEach(image => {
//   image.addEventListener("mouseenter", (e) => {
    
//     //get src for targeted image
//     imageData = e.target.getAttribute('src');
//     //create img el
//     let largeImg = document.createElement("img");
//     //add src to img el
//     largeImg.src = imageData;
    
//     let parentDiv = targetImage.parentNode;
//     console.log("Parent DIV", parentDiv);

    
    
//     parentDiv.replaceChild(largeImg, targetImage);
    
//   });
// })


