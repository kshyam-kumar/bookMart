document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");

  if (localStorage.getItem("profileData")) {
    var profileData = JSON.parse(localStorage.getItem("profileData"));

    document.getElementById("first-name").value = profileData.firstName;
    document.getElementById("last-name").value = profileData.lastName;
    document.getElementById("email").value = profileData.email;
    document.getElementById("phone").value = profileData.phone;
    document.getElementById("address").value = profileData.address;
    document.getElementById("postal-code").value = profileData.postalCode;
  }

  document.getElementById("edit-button").addEventListener("click", function () {
    var formElements = document.querySelectorAll(".profile-form input, .profile-form textarea");
    var isModified = false;

    formElements.forEach(function (element) {
      if (element.value !== element.defaultValue) {
        isModified = true;
      }
    });

    if (!isModified) {
      showAlert("No changes made to the profile.");
      return;
    }

    if (validateProfileFields() && validateFieldRegex()) {
      saveProfile();
    } else {
      showAlert("Please fill in all the required fields correctly.");
    }
  });
});

function saveProfile() {
  var profileData = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    postalCode: document.getElementById("postal-code").value,
  };

  localStorage.setItem("profileData", JSON.stringify(profileData));
  showAlert("Profile saved successfully.");
}

function validateProfileFields() {
  var formElements = document.querySelectorAll(".profile-form input, .profile-form textarea");
  var isValid = true;

  formElements.forEach(function (element) {
    if (element.value.trim() === "") {
      isValid = false;
    }
  });

  return isValid;
}

function validateFieldRegex() {
  var emailRegex = /^\S+@\S+\.\S+$/;
  var phoneRegex = /^\d{10}$/;
  var postalCodeRegex = /^\d{6}$/;

  var emailValue = document.getElementById("email").value;
  var phoneValue = document.getElementById("phone").value;
  var postalCodeValue = document.getElementById("postal-code").value;

  if (!emailRegex.test(emailValue)) {
    showAlert("Please enter a valid email address.");
    return false;
  }

  if (!phoneRegex.test(phoneValue)) {
    showAlert("Please enter a valid 10-digit phone number.");
    return false;
  }

  if (!postalCodeRegex.test(postalCodeValue)) {
    showAlert("Please enter a valid 6-digit postal code.");
    return false;
  }

  return true;
}

function showAlert(message) {
  alert(message);
}
