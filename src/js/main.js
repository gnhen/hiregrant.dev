import { createStars } from './stars.js';

// Initialize space background
document.addEventListener('DOMContentLoaded', () => {
    createStars();
});

// Button animation
document.getElementById('portfolio-btn').addEventListener('click', () => {
    const button = document.getElementById('portfolio-btn');
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);


    window.location.href = 'https://gnh.one';
});