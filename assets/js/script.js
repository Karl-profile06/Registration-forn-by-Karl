document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');

  
  const fields = {
    firstName: document.getElementById('firstName'),
    middleName: document.getElementById('middleName'),
    lastName: document.getElementById('lastName'),
    contact: document.getElementById('contact'),
    email: document.getElementById('email'),
    idNumber: document.getElementById('idNumber'),
    suffix: document.getElementById('suffix'),
    batch: document.getElementById('batch'),
    technology: document.getElementById('technology')
  };

  
  const errors = {
    firstName: document.getElementById('error-firstName'),
    middleName: document.getElementById('error-middleName'),
    lastName: document.getElementById('error-lastName'),
    contact: document.getElementById('error-contact'),
    email: document.getElementById('error-email'),
    idNumber: document.getElementById('error-idNumber')
  };

  
  const patterns = {
    name: /^[A-Z][a-zA-Z\s'-]*$/,           // Capital letter, letters only
    contact: /^\d{11}$/,                    // Exactly 11 digits
    gmail: /^[a-zA-Z0-9._%+-]+@gmail\.com$/, // Must be Gmail
    id: /^\d{4}-\d{2}-\d{3}$/               // Format YYYY-BB-NNN
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    
    Object.values(errors).forEach(el => el.textContent = '');

  
    if (!patterns.name.test(fields.firstName.value.trim())) {
      errors.firstName.textContent = 'Start with a capital letter, letters only.';
      valid = false;
    }

    
    if (fields.middleName.value.trim() !== '' &&
        !patterns.name.test(fields.middleName.value.trim())) {
      errors.middleName.textContent = 'Start with a capital letter, letters only.';
      valid = false;
    }

  
    if (!patterns.name.test(fields.lastName.value.trim())) {
      errors.lastName.textContent = 'Start with a capital letter, letters only.';
      valid = false;
    }

  
    if (!patterns.contact.test(fields.contact.value.trim())) {
      errors.contact.textContent = 'Contact must be exactly 11 digits.';
      valid = false;
    }
    
    
    if (!patterns.gmail.test(fields.email.value.trim())) {
      errors.email.textContent = 'Enter a valid Gmail (e.g., name@gmail.com).';
      valid = false;
    }

    
    if (!patterns.id.test(fields.idNumber.value.trim())) {
      errors.idNumber.textContent = 'Format: YYYY-BB-NNN (e.g., 2023-33-123).';
      valid = false;
    }

    
    if (valid) {
      const studentData = {
        firstName: fields.firstName.value.trim(),
        middleName: fields.middleName.value.trim(),
        lastName: fields.lastName.value.trim(),
        suffix: fields.suffix.value,
        contact: fields.contact.value.trim(),
        email: fields.email.value.trim(),
        batch: fields.batch.value,
        technology: fields.technology.value,
        idNumber: fields.idNumber.value.trim()
      };

      
      let students = JSON.parse(localStorage.getItem("students")) || [];
      students.push(studentData);
      localStorage.setItem("students", JSON.stringify(students));

      
      alert("✅ Registration successful! Redirecting to homepage...");
      window.location.href = 'home.html';
    }
  });

  
  document.getElementById('reset').addEventListener('click', () => {
    Object.values(errors).forEach(el => el.textContent = '');
  });
});
