
console.log("Script is running...");
const activePage = window.location.pathname;
console.log("active page:", activePage)
// fade in hero
const heroImg = document.getElementById("heroImg");
const heroText = document.getElementById("heroText");
const homePage = document.querySelector(".home");
const homeWrapper = document.querySelector(".home-wrapper");

window.setTimeout(displayHome, 1200);
window.setTimeout(displayImg, 1200);
window.setTimeout(displayWrapper, 1600);
window.setTimeout(displayScrollText, 1900);


function displayWrapper() {
  homeWrapper.style.opacity = 1;
}
function displayHome() {
  homePage.style.opacity = 1;
}
function displayImg() {
  heroImg.style.opacity = 1;
}
function displayScrollText() {
  heroText.style.opacity = 1;
}


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

  
console.log("script runs again?");

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
const mailto = document.getElementById("mailto").addEventListener("click", () => {
  sendEmail();
});

const mailtoMalin = document.getElementById("mailtoMalin").addEventListener("click", () => {
  sendEmailToMalin();
});
const mailtoEmilie = document.getElementById("mailtoEmilie").addEventListener("click", () => {
  sendEmailToEmilie();
});
const mailtoCamilo = document.getElementById("mailtoCamilo").addEventListener("click", () => {
  sendEmailToCamilo();
});


function sendEmail() {
  {
    window.location = "mailto:hello@studio-ra.se";
  }
};
function sendEmailToMalin() {
  {
    window.location = "mailto:malin@studio-ra.se";
  }
};
function sendEmailToEmilie() {
  {
    window.location = "mailto:emilie@studio-ra.se";
  }
};
function sendEmailToCamilo() {
  {
    window.location = "mailto:camilo@studio-ra.se";
  }
};