// Gestion du menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.createElement('div');

menuOverlay.classList.add('menu-overlay');
document.body.appendChild(menuOverlay);

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

menuOverlay.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

// Empêche le scroll quand le menu est ouvert
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.innerHTML = `
        body.no-scroll {
            overflow: hidden;
            position: fixed;
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});