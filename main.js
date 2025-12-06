"use strict";

/* global variables */
const backToTopButton = document.querySelector("#back-to-top");
const burger = document.querySelector(".burger");

/* scroll function*/
function scrollFunction(){
    if(window.pageYOffset > 300){//Show backToTopButton
        if(!backToTopButton.classList.contains("btnEntrance")){
        backToTopButton.classList.remove("btnExit");
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
    }
    } else{//Hide backToTopButton
        if(backToTopButton.classList.contains("btnEntrance")){
        backToTopButton.classList.remove("btnEntrance");
        backToTopButton.classList.add("btnExit");
        setTimeout(function(){
            backToTopButton.style.display = "none";
        }, 250);
    }
    }
}

function smoothScrollBackToTop(){
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp){
        if(!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if(progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d){
    t/= d/2;
    if(t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};

function toggleMenu(){    
    const nav = document.querySelector(".nav_links");
    const navLinks = document.querySelectorAll(".nav_links li");
    nav.classList.toggle("nav-active");
        
    //Animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    //Burger animation
    burger.classList.toggle("toggle");
}

function createEventListers(){
    if(window.addEventListener){
        window.addEventListener("scroll", scrollFunction, false);
    } else if(window.attachEvent){
        window.attachEvent("scroll", scrollFunction);
    }
    if(backToTopButton.addEventListener){
        backToTopButton.addEventListener("click", smoothScrollBackToTop, false);
    } else if(backToTopButton.attachEvent){
        backToTopButton.attachEvent("click", smoothScrollBackToTop);
    }
    //Toggle Nav
    if(burger.addEventListener){
        burger.addEventListener("click", toggleMenu, false);
    } else if(burger.attachEvent){
        burger.attachEvent("click", toggleMenu);
    }
}

function setUpPage() {
    createEventListers();
}

if(window.addEventListener){
    window.addEventListener("load", setUpPage, false);
} else if(window.attachEvent){
    window.attachEvent("onload", setUpPage);
}

