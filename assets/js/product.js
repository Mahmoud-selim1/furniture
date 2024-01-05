let productRow = document.getElementById("product");
let categories = document.querySelectorAll("#categories input");
let productsArr = JSON.parse(localStorage.getItem("products")) || [];
let mainproducts = document.querySelector(".mainproducts");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let loggedIn = JSON.parse(localStorage.getItem("logged-in"));

// show products in product page
if (productsArr.length) {
  mainproducts.style.display = "none";
} else {
  mainproducts.style.display = "flex";
  productRow.style.display = "none";
}
let showProducts = () => {
  productRow.innerHTML = "";
  productsArr.forEach((element, index) => {
    productRow.innerHTML += `
        <div class="col-xxl-3 col-md-6 col-12 col-xl-6 mb-4 hov">
            <div class="card">
                <img
                    src="${element.productImgUrl}"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">${element.productName}</h5>
                    <p class="card-text">${element.productDescribtion}</p>
                    <p class="card-text">E£ ${element.productPrice}</p>
                    <button class="btn btn-primary addToCartBtn" onclick='addToCart(${index})'>
                    <i class="fa-solid fa-cart-plus me-2"></i>ADD
                    </button>
                </div>
            </div>
        </div>

        `;
  });
  addToCartBtn = document.querySelectorAll(".addToCartBtn");
};
// show products by category
for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("change", () => {
    if (categories[i].id == "all") {
      productsArr = JSON.parse(localStorage.getItem("products"));
      showProducts();
    } else {
      productsArr = [];
      let allProducts = JSON.parse(localStorage.getItem("products"));
      allProducts.forEach((element) => {
        if (element.productCategory == categories[i].id) {
          productsArr.push(element);
        }
      });

      showProducts();
    }
  });
}
// add to cart
function addToCart(index) {
  if (cart.some((element) => element.id == index)) {
    return null;
  } else {
    cart.push({
      id: index,
      amount: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
showProducts();
if (!loggedIn) {
  addToCartBtn.forEach((btn) => {
    btn.setAttribute("disabled", "disabled");
    btn.removeAttribute("onclick");
    btn.classList.replace("btn-primary", "btn-secondary");
    btn.innerText = "log to buy";
  });
}
