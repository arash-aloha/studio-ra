

console.log("Script is running...");

const activePage = window.location.pathname;

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("is-visible");
  navToggle.classList.toggle("active");
});


//active hyperlink
const links = document.querySelectorAll(".primary-navigation li a");

links.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
      link.setAttribute('aria-current', 'page');
    }
  });

// mouse scroll nav
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("primary-header").style.top = "0 ";
    document.getElementById("primary-header").style.left = "0 ";
    document.getElementById("primary-header").style.right = "0 ";
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
let mailto = document.getElementById("mailto");
mailto.addEventListener("click", () => {
  sendEmail();
});

