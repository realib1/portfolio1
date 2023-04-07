document.addEventListener("DOMContentLoaded", () => {

const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID),
        nav = document.getElementById(navID);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            console.log('toggle clicked');
            nav.classList.toggle("show");
        });
    }
}

showMenu("nav-toggle", "nav-menu");


// Remove menu mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");
    console.log('link clicked');

    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

// Copyright year
const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();


// Scroll reveal animation
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
});


// Scroll home
sr.reveal(".home--title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home--img", { origin: "right", delay: 400 });
sr.reveal(".home--social-icon", { interval: 200 });


// Scroll about
sr.reveal(".about--img", {origin: "left", delay: 400});
sr.reveal(".about--subtitle", { delay: 400 });
sr.reveal(".about--text", { delay: 400 });


// Scroll skills
sr.reveal(".skills--subtitle", {});
sr.reveal(".skills--text", {});
sr.reveal(".skills--data", { interval: 200 });
sr.reveal(".skills--img", { delay: 600 });


// Scroll work
sr.reveal(".work--img", { interval: 200 });


// Scroll contact
sr.reveal(".contact--input", { interval: 200 });
sr.reveal("label", { delay: 100 });
sr.reveal(".contact--button", { delay: 400 });

});

