function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden'); // Hide each section
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden'); // Display only the clicked section
    }
}


document.addEventListener("DOMContentLoaded", function() {
  // Select all sections and nav links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function onScroll() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
        scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
      ) {
        let currentId = section.getAttribute("id");
        
        // Remove active class from all links
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // Add active class to the link that corresponds to the current section
        document.querySelector(`nav ul li a[href="#${currentId}"]`).classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});

const texts = ["A Web Designer..." , "A Developer..." ,"I love Development...", "I Love to Deploy....", "I Love Design...."];
let index = 0;
let currentText = "";
let isDeleting = false;
let speed = 100; // Typing speed
let deleteSpeed = 50; // Erasing speed
let textElement = document.querySelector('.let');

function typeEffect() {
    let fullText = texts[index];
    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1); 
    } else {
        currentText = fullText.substring(0, currentText.length + 1); 
    }
    
    textElement.textContent = currentText;
    
    // Type or delete based on the isDeleting flag
    if (!isDeleting && currentText === fullText) {
        setTimeout(() => { isDeleting = true; }, 2000); 
    } else if (isDeleting && currentText === "") {
        index = (index + 1) % texts.length; 
        isDeleting = false; 
    }
    
    let typingSpeed = isDeleting ? deleteSpeed : speed;
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when the page loads
document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
});
