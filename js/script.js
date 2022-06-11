
console.log("Script is running...");


const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("is-visible");
  navToggle.classList.toggle("active");
});

const activePage = window.location.pathname;
console.log("active page:", activePage)
// fade in hero
const heroImg = document.getElementById("heroImg");
const heroText = document.getElementById("heroText");
window.setTimeout(displayImg, 1200);
window.setTimeout(displayScrollText, 1900);
function displayImg() {
  heroImg.style.opacity = 1;
}
function displayScrollText() {
  heroText.style.opacity = 1;
}

// active hyperlink
const links = document.querySelectorAll(".primary-navigation li a");

console.log(links)
links.forEach(link => {
  console.log("in the loop", link)
    if(link.href.includes(`${activePage}`)) {
      linkItem.classList.add('active');
    }
    console.log("after the loop", link)
  });
  console.log("active page", activePage)
  

// mouse scroll nav
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("primary-header").style.top = "0";
  } else {
    document.getElementById("primary-header").style.top = "-4rem";
  }
  prevScrollpos = currentScrollPos;
}

//smooth anchoring
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// mail to funciton
const mailto = document.getElementById("mailto");
mailto.addEventListener("click", () => {
  console.log("clicked mailto")
  sendEmail();
})

function sendEmail() {
  {
    window.location = "mailto:hello@studio-ra.se";
  }
};