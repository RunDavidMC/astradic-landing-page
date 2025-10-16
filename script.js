let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;
let isScrolling = false; // Prevent multiple scroll triggers

const changeSection = (nextSection) => {
    if (nextSection >= 0 && nextSection < totalSections && !isScrolling) {
        isScrolling = true; // Lock the scrolling
        sections[nextSection].scrollIntoView({ behavior: 'smooth' });
        currentSection = nextSection;

        // Unlock the scrolling after the animation duration (1000ms)
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
};

// Handle mouse wheel scroll
const handleScroll = (e) => {
    if (e.deltaY > 0 && currentSection < totalSections - 1) {
        changeSection(currentSection + 1); // Scroll down
    } else if (e.deltaY < 0 && currentSection > 0) {
        changeSection(currentSection - 1); // Scroll up
    }
    e.preventDefault(); // Prevent default scroll behavior
};

// Handle arrow keys (Up and Down)
const handleKeyPress = (e) => {
    if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
        changeSection(currentSection + 1); // Scroll down
    } else if (e.key === 'ArrowUp' && currentSection > 0) {
        changeSection(currentSection - 1); // Scroll up
    }
};

// Add event listeners for mouse wheel and keyboard input
window.addEventListener('wheel', handleScroll, { passive: false });
window.addEventListener('keydown', handleKeyPress);


// sliding left & right

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slides");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.style.transitionDelay = `${index * 0.2}s`; // Staggered effect
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.8 }); // Trigger when 20% of the element is visible

    elements.forEach(el => observer.observe(el));
});
