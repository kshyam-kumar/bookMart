cartItems=JSON.parse(localStorage.getItem('cartDetails'));
document.querySelector(".cart-summary").innerHTML=cartItems;
cartItemsList=JSON.parse(localStorage.getItem('cartItemsList'));
document.querySelectorAll(".delete-button").forEach((deleteButton, index) => {
  deleteButton.addEventListener("click", () => {
    cartItemsList.splice(index, 1);
    cartHTMLPrint();
    // selectedItems.splice(index, 1);
  
  });
});
