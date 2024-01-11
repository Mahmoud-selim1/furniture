let access = document.querySelector(".access");
let cartCount = document.querySelector("header nav #cartCount");
cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartCount);
loggedIn = JSON.parse(localStorage.getItem("logged-in"));
if (loggedIn) {
  access.innerHTML = `<button class="btn btn-danger" onclick='rev()'>logOut</button>`;
}
let rev = () => {
  localStorage.removeItem("logged-in");
};
cartCount.innerHTML = `${cart.length}`;
