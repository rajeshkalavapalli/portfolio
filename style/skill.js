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
