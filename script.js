// script.js
// Add event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Perform form validation
    if (name === '' || email === '') {
      alert('Please fill in all fields');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address');
    } else {
      // Display success message
      var successMessage = document.createElement('p');
      successMessage.textContent = 'Thank you, ' + name + '! Your message has been submitted successfully.';
      successMessage.style.color = 'green';
      document.getElementById('contactForm').appendChild(successMessage);
      document.getElementById('name').value = ''; // Clear form values
      document.getElementById('email').value = '';
    }
  });
  
  // Function to validate email address
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  