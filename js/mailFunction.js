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
  console.log("clicked on camilo")
  window.location = "mailto:camilo@studio-ra.se";
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
    
  }
};