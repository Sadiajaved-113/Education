const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-list");
const navbar = document.querySelector(".navbar");
const rightNav = document.querySelector(".right-nav");

if (burger && nav && rightNav) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("v-class-resp");
        rightNav.classList.toggle("v-class-resp");
        navbar.classList.toggle("h-nav-resp");
        burger.classList.toggle("toggle");
    });
} else {
    console.error("Elements not found!");
}
