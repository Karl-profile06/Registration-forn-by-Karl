document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');


  const firstName = document.getElementById('firstName');
  const middleName = document.getElementById('middleName');
  const lastName = document.getElementById('lastName');
  const contact = document.getElementById('contact');
  const email = document.getElementById('email');
  const idNumber = document.getElementById('idNumber');

  
  const errorFirstName = document.getElementById('error-firstName');
  const errorMiddleName = document.getElementById('error-middleName');
  const errorLastName = document.getElementById('error-lastName');
  const errorContact = document.getElementById('error-contact');
  const errorEmail = document.getElementById('error-email');
  const errorIdNumber = document.getElementById('error-idNumber');

  
  const namePattern = /^[A-Z][a-zA-Z\s'-]*$/;
  const contactPattern = /^\d{11}$/;
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const idPattern = /^\d{4}-\d{2}-\d{3}$/; 
  form.addEventListener('submit', function (event) {
    event.preventDefault(); 
   
    errorFirstName.textContent = '';
    errorMiddleName.textContent = '';
    errorLastName.textContent = '';
    errorContact.textContent = '';
    errorEmail.textContent = '';
    errorIdNumber.textContent = '';

    let valid = true;

    
    if (!namePattern.test(firstName.value.trim())) {
      errorFirstName.textContent = 'Must start with a capital letter and contain only letters.';
      valid = false;
    }

    
    if (middleName.value.trim() !== '' && !namePattern.test(middleName.value.trim())) {
      errorMiddleName.textContent = 'Must start with a capital letter and contain only letters.';
      valid = false;
    }

   
    if (!namePattern.test(lastName.value.trim())) {
      errorLastName.textContent = 'Must start with a capital letter and contain only letters.';
      valid = false;
    }

    
    if (!contactPattern.test(contact.value.trim())) {
      errorContact.textContent = 'Contact Number must be exactly 11 digits.';
      valid = false;
    }

   
    if (!gmailPattern.test(email.value.trim())) {
      errorEmail.textContent = 'Please enter a valid Gmail address (e.g., name@gmail.com).';
      valid = false;
    }

    
    if (!idPattern.test(idNumber.value.trim())) {
      errorIdNumber.textContent = 'Format must be YYYY-BB-NNN (e.g., 2023-33-123).';
      valid = false;
    }

    
    if (valid) {
      href = 'Home.html';
    }
  });

  
  document.getElementById('reset').addEventListener('click', () => {
    errorFirstName.textContent = '';
    errorMiddleName.textContent = '';
    errorLastName.textContent = '';
    errorContact.textContent = '';
    errorEmail.textContent = '';
    errorIdNumber.textContent = '';
  });

});

