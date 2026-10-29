/* =========================================
   PAGE SECTIONS and varyabls
========================================= */

let part2 = document.getElementById('part2');
let part3 = document.getElementById('part3');
let part4 = document.getElementById('part4');
let part5 = document.getElementById('part5');
let part6 = document.getElementById('part6');
let part7 = document.getElementById('part7');


/* =========================================
   SCROLL ANIMATIONS
========================================= */

window.addEventListener('scroll', function () {


  if (window.scrollY >= 500) {
    part2.style.opacity = '1';
  }

  if (window.scrollY >= 1000) {
    part3.style.opacity = '1';
  }

  if (window.scrollY >= 2400) {
    part4.style.opacity = '1';
  }

  if (window.scrollY >= 2882) {
    part5.style.opacity = '1';
  }

  if (window.scrollY >= 3800) {
    part6.style.opacity = '1';
  }

  if (window.scrollY >= 3700) {
    part7.style.opacity = '1';
  }

});


/* =========================================
   SEND CONTACT FORM TO WHATSAPP
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "201013464781";

  const whatsappMessage =
    "Hello, you received a new message from your coffee website.\n\n" +
    "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Number: " + number + "\n\n" +
        "Message:\n" + message;

  const whatsappURL =
      "https://wa.me/201013464781?text=" +
        encodeURIComponent(whatsappMessage);


  window.open(whatsappURL, "_blank");

  contactForm.reset();

});


/* =========================================
   MY LINKS TO CONTACT ME
========================================= */

function openWhatsApp() {

  window.open(
    "https://wa.me/201013464781",
    "_blank"
  );

}

function openFaceBook() {

  window.open(
    "https://www.facebook.com/share/14mzRptm3sc/?mibextid=wwXIfr",
    "_blank"
  );

}

function openInstgram() {

  window.open(
    "https://www.instagram.com/gaser___22?igsi=MWdpaWFwYmdwanNtaw==",
    "_blank"
  );

}


/* =========================================
   MOBILE / TABLET NAVBAR
========================================= */

const menuBtn = document.getElementById("menuBtn");
const links = document.querySelector(".links");
const navLinks = document.querySelectorAll(".links a");


/* =========================================
   OPEN / CLOSE MOBILE MENU
========================================= */

menuBtn.addEventListener("click", function () {

  menuBtn.classList.toggle("active");
  links.classList.toggle("active");

});


/* =========================================
   CLOSE MENU AFTER CLICKING A LINK
========================================= */

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    menuBtn.classList.remove("active");
    links.classList.remove("active");

  });

});