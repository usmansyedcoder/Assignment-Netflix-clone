
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('i');
      
      // Toggle active class
      this.parentElement.classList.toggle('active');
      
      // Change icon
      if (this.parentElement.classList.contains('active')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-plus');
      }
    });
  });
  
  // Header background on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Email form submission
  const emailForm = document.querySelector('.email-form');
  const emailInput = document.querySelector('.email-form input');
  const submitButton = document.querySelector('.email-form button');
  
  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const email = emailInput.value;
    
    if (email && validateEmail(email)) {
      alert(`Thank you! We'll contact you at ${email}`);
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address');
    }
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
