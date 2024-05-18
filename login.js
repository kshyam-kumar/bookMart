document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var loginMessage = document.getElementById('loginMessage');

  loginMessage.innerHTML = "";

  if (email.trim() === "") {
    loginMessage.innerHTML = "Email cannot be empty.";
    loginMessage.style.color = "red"; 
    return false;
  } else if (emailRegex.test(email) === false) {
    loginMessage.innerHTML = "Email must be a valid email address.";
    loginMessage.style.color = "red"; 
    return false;
  }

  if (password.trim() === "") {
    loginMessage.innerHTML = "Password is required.";
    loginMessage.style.color = "red"; 
    return false;
  }

  loginMessage.innerHTML = "Login successful!";
  loginMessage.style.color = "green";
});
