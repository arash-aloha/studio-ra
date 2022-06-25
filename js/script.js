
console.log("Script is running...");
const activePage = window.location.pathname;
console.log("active page:", activePage)
// fade in hero
const heroImg = document.getElementById("heroImg");
const heroText = document.getElementById("heroText");
const homePage = document.querySelector(".home");
const homeWrapper = document.querySelector(".home-wrapper");


const checkFirstVisit = () => {
  if(document.cookie.indexOf('mycookie')==-1) {
    // cookie doesn't exist, create it now
    setTimeout(displayHome, 1200);
    setTimeout(displayImg, 1200);
    setTimeout(displayWrapper, 1600);
    setTimeout(displayScrollText, 1900);
    document.cookie = 'mycookie=1';
  }
  else {
    // not first visit, do nothing
    setTimeout(displayHome, 1200);
    setTimeout(displayImg, 1200);
    setTimeout(displayWrapper, 1600);
    setTimeout(displayScrollText, 1900);
  }
}

checkFirstVisit();

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

//fade-in 
checkFirstVisit();

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

// mail to funciton
let mailto = document.getElementById("mailto");
mailto.addEventListener("click", () => {
  sendEmail();
});

let mailtoMalin = document.getElementById("mailtoMalin");
mailtoMalin.addEventListener("click", () => {
  sendEmailToMalin();
});

let mailtoEmilie = document.getElementById("mailtoEmilie");
mailtoEmilie.addEventListener("click", () => {
  sendEmailToEmilie();
});

let mailtoCamilo = document.getElementById("mailtoCamilo");
mailtoCamilo.addEventListener("click", () => {
  console.log("clicked on camilo")
  window.location = "mailto:camilo@studio-ra.se";
});

console.log(mailtoCamilo)

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
    
  }
};