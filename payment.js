function validateCardNumber() {
  const cardNumber = document.querySelector(".data-field");
  const cardNumberValue = cardNumber.value.replace(/\s/, "");
  return /^\d{16}$/.test(cardNumberValue);
}

function validateExpirationDate() {
  const month = document.querySelector(".month-data-field");
  const year = document.querySelector(".year-data-field");
  const monthValue = parseInt(month.value, 10);
  const yearValue = parseInt(year.value, 10);

  return (
    /^\d{2}$/.test(month.value) &&
    /^\d{4}$/.test(year.value) &&
    monthValue >= 1 &&
    monthValue <= 12 &&
    yearValue >= 1965
  );
}

function validateCVV() {
  const cvv = document.querySelector(".cvv-data-field");
  return /^\d{3}$/.test(cvv.value);
}

function validateCardholderName() {
  const cardholderName = document.querySelector(".data-field");
  return cardholderName.value.trim() !== "";
}

function paynow() {
  const cardNumberValid = validateCardNumber();
  const expirationDateValid = validateExpirationDate();
  const cvvValid = validateCVV();
  const cardholderNameValid = validateCardholderName();
  const termsChecked = document.getElementById("terms-conditions").checked;

  if (
    cardNumberValid &&
    expirationDateValid &&
    cvvValid &&
    cardholderNameValid &&
    termsChecked
  ) {
    alert("Payment successful!");
  } else {
    let errorMessage = "Please fill in all the required fields correctly:\n";

    if (!cardNumberValid) {
      errorMessage += "- Card Number\n";
    }

    if (!expirationDateValid) {
      errorMessage += "- Expiration Date\n";
    }

    if (!cvvValid) {
      errorMessage += "- CVV\n";
    }

    if (!cardholderNameValid) {
      errorMessage += "- Cardholder Name\n";
    }

    if (!termsChecked) {
      errorMessage += "- Terms and Conditions\n";
    }

    alert(errorMessage);
  }
}
