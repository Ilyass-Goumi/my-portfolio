const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});



// sec2

// ===== MENU RESPONSIVE =====

// ===== ANIMATION TEXTE =====
// const text = ["un Front-End Web Developer", "un Web Designer", "passionné du digital"];
// let index = 0;
// let charIndex = 0;
// let currentText = "";
// let isDeleting = false;

// function typeEffect() {
//   currentText = text[index];
//   const typingElement = document.querySelector(".typing");

//   if (isDeleting) {
//     typingElement.textContent = currentText.substring(0, charIndex--);
//   } else {
//     typingElement.textContent = currentText.substring(0, charIndex++);
//   }

//   if (!isDeleting && charIndex === currentText.length) {
//     isDeleting = true;
//     setTimeout(typeEffect, 1500);
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     index = (index + 1) % text.length;
//     setTimeout(typeEffect, 500);
//   } else {
//     setTimeout(typeEffect, isDeleting ? 50 : 100);
//   }
// }

// document.addEventListener("DOMContentLoaded", typeEffect);




// ===== ANIMATION AU SCROLL =====
const cards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
});

// js footer




