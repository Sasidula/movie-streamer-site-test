// Navbar CSS property in Scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// home screen section redirecting
const HomeIcon = document.querySelector(".logo");
HomeIcon.addEventListener("click", () => {
    window.location.href = "index.html";
});


// Profile section redirecting
const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
    window.location.href = "profile-details.html";
});


// Movie card
const movieCard = document.querySelectorAll(".content-card");
movieCard.forEach((card) => {
    card.addEventListener("mouseEnter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});