
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const genderInputs = document.querySelectorAll('input[name="gender"]');

nameInput.addEventListener('keyup', validateName);
emailInput.addEventListener('keyup', validateEmail);
genderInputs.forEach((input) => {
  input.addEventListener('change', validateGender);
});

function validateName() {
  const nameError = document.getElementById('nameError');
  if (nameInput.value.length < 3) {
    nameError.innerHTML = 'Nama harus terdiri dari minimal 3 karakter.';
  } else {
    nameError.innerHTML = '';
  }
}

function validateEmail() {
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.innerHTML = 'Email tidak valid.';
  } else {
    emailError.innerHTML = '';
  }
}

function validateGender() {
  const genderError = document.getElementById('genderError');
  if (!genderInputs[0].checked && !genderInputs[1].checked) {
    genderError.innerHTML = 'Jenis kelamin harus dipilih.';
  } else {
    genderError.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  validateName();
  validateEmail();
  validateGender();

  const errorMessages = document.querySelectorAll('.error');
  let hasErrors = false;
  errorMessages.forEach((errorMessage) => {
    if (errorMessage.innerHTML !== '') {
      hasErrors = true;
    }
  });

  if (hasErrors) {
    event.preventDefault();
  }
});
