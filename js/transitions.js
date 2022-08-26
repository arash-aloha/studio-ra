
document.addEventListener('DOMContentLoaded', () => {
  const transitionElement = document.querySelector(".transition");
  const anchors = document.querySelectorAll("a");
  
  setTimeout(() => {
    transitionElement.classList.remove("is-active");
  }, 500)

  for(let i = 0; i < anchors.length; i++) {
    
    const anchor = anchors[i];

    anchor.addEventListener("click", e => {
      e.preventDefault(); 
      let target = anchor.href;

      transitionElement.classList.add("is-active");

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  };

});
