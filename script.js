// Typewriter Effect for Hero Section
let index = 0;
let text = "Hi, I'm Shivansh Bagga!";
let typewriter = document.getElementById("typewriter");

function type() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50);
  } else {
    setTimeout(() => {
      typewriter.innerHTML = "";
      index = 0;
      type();
    }, 1500);
  }
}

window.onload = type;


// Hamburger Menu Toggle for Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
