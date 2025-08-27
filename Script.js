document.getElementById("regForm").addEventListener("submit", function(event) {
  let isValid = true;
  let messages = [];

  const firstName = document.getElementById("firstName").value.trim();
  const middleName = document.getElementById("middleName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const suffix = document.getElementById("suffix").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const email = document.getElementById("email").value.trim();
  const idNumber = document.getElementById("idNumber").value.trim();

  const namePattern = /^[A-Za-z]+$/;
  const contactPattern = /^[0-9]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const idPattern = /^[0-9]+$/;

  if (!namePattern.test(firstName)) {
    isValid = false;
    messages.push("First name should only contain letters.");
  }
  if (middleName && !namePattern.test(middleName)) {
    isValid = false;
    messages.push("Middle name should only contain letters.");
  }
  if (!namePattern.test(lastName)) {
    isValid = false;
    messages.push("Last name should only contain letters.");
  }
  if (suffix && !namePattern.test(suffix)) {
    isValid = false;
    messages.push("Suffix should only contain letters.");
  }
  if (!contactPattern.test(contact)) {
    isValid = false;
    messages.push("Contact number should only contain digits.");
  }
  if (!emailPattern.test(email)) {
    isValid = false;
    messages.push("Email must be a valid Gmail address (example@gmail.com).");
  }
  if (!idPattern.test(idNumber)) {
    isValid = false;
    messages.push("ID Number should only contain digits.");
  }

  if (!isValid) {
    event.preventDefault();
    alert(messages.join("\n"));
  }
});