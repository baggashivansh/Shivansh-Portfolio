// Typing Animation for Hero Section
const heroHeading = document.querySelector('.hero h2');
const heroParagraph = document.querySelector('.hero p');

const text = "Hi,I'm Shivansh Bagga!!";
let i = 0;
let typingSpeed = 70;

function typeWriter() {
    if (i < text.length) {
        heroHeading.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.addEventListener('scroll', () => {
    const heroPosition = heroHeading.getBoundingClientRect().top;
    if (heroPosition < window.innerHeight * 0.8 && i === 0) {
        typeWriter();  // Start typing animation when in view
    }

    // Hero Section Scroll Animation
    if (heroPosition < window.innerHeight * 0.8) {
        heroHeading.style.opacity = 1;
        heroHeading.style.transform = 'translateY(0)';
        heroParagraph.style.opacity = 1;
        heroParagraph.style.transform = 'translateY(0)';
    }
});

// Make Header Static after Scrolling
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
