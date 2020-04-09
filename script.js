// Cache DOM
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const errorMsg = document.querySelector('.error-text');
const errorIcon = document.getElementById('error-icon');

// Add Event Listener
submit.addEventListener('click', checkEmail);

// Check Email
function checkEmail() {
  const input = email.value;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.trim())) {
    errorMsg.style.display = 'none';
    errorIcon.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
    errorIcon.style.display = 'block';
  }
}
