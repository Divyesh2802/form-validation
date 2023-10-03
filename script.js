var nameErr = document.getElementById('name-error');
var phoneErr = document.getElementById('phone-error');
var emailErr = document.getElementById('email-error');
var msgErr = document.getElementById('msg-error');
var submitErr = document.getElementById('submit-error');

function validateName() {
  var name = document.getElementById('name').value;

  if (name.length == 0) {
    nameErr.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s?[A-Za-z]*$/)) {
    nameErr.innerHTML = 'Enter alphabets only';
    return false;
  }
  nameErr.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatePhone() {
  var phone = document.getElementById('phone').value;

  if (phone.length == 0) {
    phoneErr.innerHTML = 'Phone No. is required';
    return false;
  }
  if (phone.length != 10) {
    phoneErr.innerHTML = 'Phone No. should be 10 digits';
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneErr.innerHTML = 'Enter digits only';
    return false;
  }
  phoneErr.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById('email').value;

  if (email.length == 0) {
    emailErr.innerHTML = 'Email ID is required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailErr.innerHTML = 'Enter valid Email ID';
    return false;
  }
  emailErr.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMessage() {
  var msg = document.getElementById('msg').value;
  var req = 30;
  var left = req - msg.length;

  if (left > 0) {
    msgErr.innerHTML = left + ' more characters required';
    return false;
  }

  msgErr.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    submitErr.style.display = "block";
    submitErr.innerHTML = 'Please fix the errors to submit the form.';
    setTimeout(function () {
      submitErr.style.display = "none";
    }, 3000);
    return false;
  }
}
