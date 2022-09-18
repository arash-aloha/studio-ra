let mailtoMalin = document.querySelector("#mailtoMalin");
mailtoMalin.addEventListener("click", () => {
  sendEmailToMalin();
});

let mailtoEmilie = document.querySelector("#mailtoEmilie");
mailtoEmilie.addEventListener("click", () => {
  sendEmailToEmilie();
});

let mailtoCamilo = document.querySelector("#mailtoCamilo");
mailtoCamilo.addEventListener("click", () => {
  window.location = "mailto:camilo@studio-ra.se";
});

function sendEmail() {
  {
    window.location = "mailto:hej@studio-ra.se";
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

// mail to funciton
let mailto = document.getElementById("mailto");
mailto.addEventListener("click", () => {
  sendEmail();
}, false);