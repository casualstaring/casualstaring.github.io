function getEmail() {
  // Selecting the input element and get its value
  var email = document.getElementById('email').value;
  var format = /\w+@\w+\.(edu|com)/;

  var i;
  var is_valid = false;
  if (email.search(format) != -1) {
    is_valid = true;
  }

  // Edge case: a.com@jack
  if (!is_valid) {
    document.getElementById('email_message').innerHTML = 'Invalid email address.';
    return;
  }
  document.getElementById('email_message').innerHTML = 'Email successfully recorded.';
}