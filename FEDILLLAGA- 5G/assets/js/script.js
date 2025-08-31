document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');

  // Input elements
  const firstName = document.getElementById('firstName');
  const middleName = document.getElementById('middleName');
  const lastName = document.getElementById('lastName');
  const contact = document.getElementById('contact');
  const email = document.getElementById('email');
  const idNumber = document.getElementById('idNumber');

  // Error message elements
  const errorFirstName = document.getElementById('error-firstName');
  const errorMiddleName = document.getElementById('error-middleName');
  const errorLastName = document.getElementById('error-lastName');
  const errorContact = document.getElementById('error-contact');
  const errorEmail = document.getElementById('error-email');
  const errorIdNumber = document.getElementById('error-idNumber');

  // Regex patterns
  const namePattern = /^[A-Z][a-zA-Z\s'-]*$/;
  const contactPattern = /^\d{11}$/;
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const idPattern = /^\d{4}-\d{2}-\d{3}$/; // Example: 2023-33-123

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Always prevent default submission

    // Reset error messages
    errorFirstName.textContent = '';
    errorMiddleName.textContent = '';
    errorLastName.textContent = '';
    errorContact.textContent = '';
    errorEmail.textContent = '';
    errorIdNumber.textContent = '';

    let valid = true;

    // Validate first name
    if (!namePattern.test(firstName.value.trim())) {
      errorFirstName.textContent = 'Must start with a capital letter and contain only letters.';
      valid = false;
    }

    // Validate middle name (optional)
    if (middleName.value.trim() !== '' && !namePattern.test(middleName.value.trim())) {
      errorMiddleName.textContent = 'Must start with a capital letter and contain only letters.';
      valid = false;
    }

    // Validate last name
    if (!namePattern.test(lastName.value.trim())) {
      errorLastName.textContent = 'Must start with a capital letter and contain only letters.';
      valid = false;
    }

    // Validate contact number
    if (!contactPattern.test(contact.value.trim())) {
      errorContact.textContent = 'Contact Number must be exactly 11 digits.';
      valid = false;
    }

    // Validate email
    if (!gmailPattern.test(email.value.trim())) {
      errorEmail.textContent = 'Please enter a valid Gmail address (e.g., name@gmail.com).';
      valid = false;
    }

    // Validate student ID
    if (!idPattern.test(idNumber.value.trim())) {
      errorIdNumber.textContent = 'Format must be YYYY-BB-NNN (e.g., 2023-33-123).';
      valid = false;
    }

    // If everything is valid, redirect to home.html
    if (valid) {
      window.location.href = 'home.html';
    }
  });

  // Clear error messages on reset
  document.getElementById('reset').addEventListener('click', () => {
    errorFirstName.textContent = '';
    errorMiddleName.textContent = '';
    errorLastName.textContent = '';
    errorContact.textContent = '';
    errorEmail.textContent = '';
    errorIdNumber.textContent = '';
  });
});
