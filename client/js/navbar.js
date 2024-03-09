// For responsive navbar
const navElement = document.querySelector('.nav-items');
const hamburgerElement = document.querySelector('.hamburger');
const timeElement = document.querySelector('.time-now');
// toggle hamburger icon 
hamburgerElement.addEventListener("click", ()=>{
    navElement.classList.toggle("nav-open");
    hamburgerElement.classList.toggle("hamburger-open");
});