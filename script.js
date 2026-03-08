// Smooth scroll function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// MENU TOGGLE

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function(event) {
    event.preventDefault(); // prevents page jump
    navLinks.classList.toggle("active");
});


// CLOSE MENU AFTER CLICKING LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Hero buttons
document.getElementById("serviceBtn").addEventListener("click", function () {
    scrollToSection("services");
});

document.getElementById("contactBtn").addEventListener("click", function () {
    scrollToSection("contact");
});

// Navbar menu icon -> Services section
document.getElementById("menuBtn").addEventListener("click", function () {
    scrollToSection("services");
});