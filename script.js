// script.js

// Glowing Cursor Follower
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Smooth hover size effect
const hoverTargets = document.querySelectorAll('a, button, .btn-glow');
hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '35px';
        cursor.style.height = '35px';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
    });
});

// Optional: Scroll to top button, animations, etc. can be added here later