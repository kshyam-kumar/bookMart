document.querySelector("form").addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Basic email format validation
  var email = document.getElementById("email").value;
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Password match validation
  var password = document.getElementById("password").value;
  if (isStrongPassword(password)) {
    alert("Please enter a strong password.");
    return;
  }
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Basic mobile number validation (10 digits)
  var mobile = document.getElementById("mobile").value;
  if (!isValidMobile(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // If all validations pass, display success message
  displaySuccessMessage();
  clearFormFields();
});

function isValidEmail(email) {
  // Basic email format validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidMobile(mobile) {
  // Basic mobile number validation (10 digits)
  var mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
}

function displaySuccessMessage() {
  // Create a new element to display the success message
  document.querySelector(".successful-info").innerText =
    "Successfully registered";
}
function isStrongPassword(password) {
  // Minimum length of 8 characters
  if (password.length < 8) {
    return true;
  }
  else{
    return false;
  }
}
function clearFormFields() {
  // Reset all form fields
  document.querySelector("form").reset();
}