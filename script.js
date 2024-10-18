// Show the application form when the "Apply Now" button is clicked
function showForm() {
    const formSection = document.getElementById("form-section");
    formSection.style.display = "block";
  
    // Scroll to the form section
    formSection.scrollIntoView({
      behavior: "smooth"
    });
  }
  
  // Smooth scroll for the "Explore More" button
  document.querySelector('.explore-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#admissions').scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  // Handle form submission
  document.getElementById('admission-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Reset form after submission
    this.reset();
  });
  