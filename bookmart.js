let cartItemsList = JSON.parse(localStorage.getItem("cartItemsList")) || [];
// cartItemsList=[];//remove it later remember it
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".book-button");
  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      addToCart(index);
    });
  });
});

function addToCart(index) {
  const bookImage = document.querySelectorAll(".book-image")[index].src;
  console.log(bookImage);
  const bookName = document.querySelectorAll(".book-title")[index].innerText;
  const bookCost = document.querySelectorAll(".book-cost")[index].innerText;
  const quantitySelect =
    document.querySelectorAll(".quantitySelect")[index].value;
  const cartObject = {
    bookImage,
    bookName,
    bookCost,
    quantitySelect,
  };
  cartItemsList.push(cartObject);
  const cartDetails = cartHTMLPrint();
  localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
  localStorage.setItem("cartItemsList", JSON.stringify(cartItemsList));
}

function cartHTMLPrint() {
  let count = 0;
  let cartListHTML = "";
  cartItemsList.forEach((cartObject, index) => {
    const { bookImage, bookName, bookCost, quantitySelect } = cartObject;
    let itemList = `
    <div class="product-cart-box">
        <div class="delivery-date">Delivery date: Thursday, November 16</div>
        <div class="cart-item-grid">
          <img class="cart-item-image" src="${bookImage}" />
          <div class="cart-item-details">
            <div class="book-name">${bookName}</div>
            <div class="book-price">${bookCost}</div>
            <div class="book-quantity">Quantity: ${quantitySelect} <span><button>Update</button><button class="delete-button"> Delete</button></span></div>
          </div>
          <div class="delivery-options">
            <div class="delivery-title">Choose a delivery option:</div>
            <div class="delivery-option">
              <input type="radio" checked name="option-${count}" />
              <div>
                <div class="delivery-option-date">Tuesday, June 21</div>
                <div class="delivery-option-price">FREE Shipping</div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" name="option-${count}"/>
              <div>
                <div class="delivery-option-date">Wednesday, June 15</div>
                <div class="delivery-option-price">₹99 - Shipping</div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" name="option-${count}" />
              <div>
                <div class="delivery-option-date">Monday, June 13</div>
                <div class="delivery-option-price">₹50 - Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    cartListHTML += itemList;
    count++;
  });

  return cartListHTML;
}
