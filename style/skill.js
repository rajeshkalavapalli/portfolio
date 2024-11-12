// JavaScript functionality for portfolio page

// Section toggle functionality
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.about, .skills, .experience').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Smooth scrolling functionality for navbar links
document.querySelectorAll('.nav-bar1 a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progress bar animation on scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const valueNow = bar.getAttribute('aria-valuenow');
        bar.style.width = `${valueNow}%`;
    });
}

// Trigger progress bar animation when in view
function handleScroll() {
    const progressBars = document.querySelectorAll('.progress-bar-container');
    const windowBottom = window.innerHeight + window.scrollY;

    progressBars.forEach(container => {
        const containerTop = container.offsetTop;
        if (windowBottom >= containerTop) {
            animateProgressBars();
        }
    });
}

window.addEventListener('scroll', handleScroll);
