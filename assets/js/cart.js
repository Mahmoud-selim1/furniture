let cartItems = document.getElementById("cartItems");
let total = document.getElementById("total");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let productsArr = JSON.parse(localStorage.getItem("products")) || [];

//show products in cart
function showInCart() {
  cartItems.innerHTML = "";
  totalPrice = 0;
  cart.forEach((element, index) => {
    cartItems.innerHTML += `

        <div class="card mb-3">
            <div class="row g-0 align-items-center">
            <div class="col-md-4 col-12">
                <img
                 src="${productsArr[element.id].productImgUrl}"
                class="img-fluid"
                alt="..."
                />
            </div>
            <div class="col-md-6 p-5 col-8">
                <h5 class="card-title">${
                  productsArr[element.id].productName
                }</h5>
                <p class="card-text">
                    ${productsArr[element.id].productName}
                </p>
            </div>
            <div class="col-md-2 col-4">
                <div class="btns d-flex flex-column align-items-center">
                <button class="btn btn-info" onclick='increaseAmount(${index})'>+</button>
                <div class="price">E£ <span id="price"> ${
                  productsArr[element.id].productPrice
                }
                </span>X${element.amount}</div>
                <button class="btn btn-info" onclick='decreaseAmount(${index})'>-</button>
                </div>
            </div>
            </div>
      </div>
        `;
    totalPrice += +productsArr[element.id].productPrice * element.amount;
  });
  total.innerHTML = `${totalPrice}`;
}
// increase amount of product in cart
let increaseAmount = (id) => {
  cart[id].amount++;
  localStorage.setItem("cart", JSON.stringify(cart));
  showInCart();
};
// decrease amount of product in cart
let decreaseAmount = (id) => {
  if (cart[id].amount > 1) {
    cart[id].amount--;
    localStorage.setItem("cart", JSON.stringify(cart));
    showInCart();
  }
};
showInCart();
