"use strict";

import * as validation from "./formValidation.js";

const scrollToTopBtn = document.getElementById("back-to-top");
const burger = document.querySelector(".burger");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
});

const fadeInBottom = document.querySelectorAll(".fade-in-bottom ");
fadeInBottom.forEach((el) => observer.observe(el));

const navSlide = () => {
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  console.log(navLinks);

  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

  /* Burger animation */
  burger.classList.toggle("toggle");
};

const scrollToTop = () => {
  if (window.pageYOffset > 300) {
    if (!scrollToTopBtn.classList.contains("btnEntrance")) {
      scrollToTopBtn.classList.remove("btnExit");
      scrollToTopBtn.classList.add("btnEntrance");
      scrollToTopBtn.style.display = "block";
    }
  } else {
    if (scrollToTopBtn.classList.contains("btnEntrance")) {
      scrollToTopBtn.classList.remove("btnEntrance");
      scrollToTopBtn.classList.add("btnExit");

      setTimeout(() => {
        scrollToTopBtn.style.display = "none";
      }, 250);
    }
  }
};

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration),
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

const formValidation = () => {
  const name = document.getElementById("full_name").value;
  const email = document.getElementById("emailBox").value;
  const phone = document.getElementById("phoneBox").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  let isFormValid = true;

  if (!validation.elementLen(name, 3, 30)) {
    document.querySelector("#fName .errorMessage").innerHTML =
      "Please enter your full name";
    isFormValid = false;
  }

  if (!validation.elementLen(email, 0, 30)) {
    document.querySelector("#email .errorMessage").innerHTML =
      "Please enter your email address";
    isFormValid = false;
  } else if (!validation.emailValidation(email)) {
    document.querySelector("#email .errorMessage").innerHTML =
      "Please enter the correct email address.";
    isFormValid = false;
  }

  if (!validation.elementLen(phone, 0, 15)) {
    document.querySelector("#phone .errorMessage").innerHTML =
      "Please enter your phone number";
    isFormValid = false;
  } else if (!validation.phoneValidation(phone)) {
    document.querySelector("#phone .errorMessage").innerHTML =
      "Please enter the correct phone number";
  }

  if (subject.trim() === "select" || subject.trim === null) {
    document.querySelector("#subjectBox .errorMessage").innerHTML =
      "Please select the relevant subject";
    isFormValid = false;
  }

  if (!validation.elementLen(message, 5, 1000)) {
    document.querySelector("#messageBox .errorMessage").innerHTML =
      "Please enter a message";
    isFormValid = false;
  }

  if (isFormValid) {
    form.submit();
  }
};

function createEventListeners() {
  if (window.addEventListener) {
    burger.addEventListener("click", navSlide, false);
  } else if (window.attachEvent) {
    window.attachEvent("click", navSlide);
  }

  if (window.addEventListener) {
    window.addEventListener("scroll", scrollToTop, false);
  } else if (window.attachEvent) {
    window.attachEvent("scroll", scrollToTop);
  }

  if (window.addEventListener) {
    scrollToTopBtn.addEventListener("click", smoothScrollBackToTop, false);
  } else if (window.attachEvent) {
    scrollToTopBtn.attachEvent("click", smoothScrollBackToTop);
  }

  if (window.addEventListener) {
    submitBtn.addEventListener("click", formValidation, false);
  } else if (window.attachEvent) {
    window.attachEvent("click", formValidation);
  }
}

function setupPage() {
  createEventListeners();
}

if (window.addEventListener) {
  window.addEventListener("load", setupPage, false);
} else if (window.attachEvent) {
  window.attachEvent("load", setupPage);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
