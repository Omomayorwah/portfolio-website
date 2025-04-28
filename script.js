const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const navbar = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add an event listener to track scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Scroll threshold (50px from the top)
        navbar.classList.add('scrolled'); // Add class to change background
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
    }
});

