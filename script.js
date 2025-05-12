// Typewriter animation
const typeText = "Hi, I'm Shivansh Bagga!!";
const typewriter = document.getElementById("typewriter");
let idx = 0;

function typingEffect() {
  if (idx < typeText.length) {
    typewriter.innerHTML += typeText.charAt(idx);
    idx++;
    setTimeout(typingEffect, 120);
  } else {
    setTimeout(() => {
      typewriter.innerHTML = "";
      idx = 0;
      typingEffect();
    }, 2500);
  }
}

window.onload = typingEffect;

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
