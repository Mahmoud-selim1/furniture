let addInputs = document.querySelectorAll("#addproduct input");
let description = document.querySelector("#addproduct textarea");
let category = document.querySelector("#addproduct select");
let productsArr = JSON.parse(localStorage.getItem("products")) || [];
let table = document.querySelectorAll("table");
let tbody = document.querySelectorAll("tbody");
let updateInputs = document.querySelectorAll("#updateProduct input");
let updateDescription = document.querySelector("#updateProduct textarea");
let updateCategory = document.querySelector("#updateProduct select");
let addAdmin = document.querySelectorAll("#addAdmin input");
let adminArr = JSON.parse(localStorage.getItem("admins")) || [];
let usersArr = JSON.parse(localStorage.getItem("users")) || [];
let ShowProdcutBtn = document.getElementById("ShowProdcutBtn");
let ShowUserBtn = document.getElementById("ShowUserBtn");
// add new product
function addProduct() {
  let productObj = {
    productName: addInputs[0].value,
    productDescribtion: description.value,
    productPrice: addInputs[1].value,
    productImgUrl: addInputs[2].value,
    productCategory: category.value,
  };
  productsArr.push(productObj);
  localStorage.setItem("products", JSON.stringify(productsArr));
  resetData();
  showProducts();
}
// reset all data after adding new product
let resetData = () => {
  for (let i = 0; i < addInputs.length; i++) {
    addInputs[i].value = "";
  }
  description.value = "";
  category.value = "";
};
// Show Products Info In Table
let showProducts = () => {
  tbody[0].innerHTML = "";
  productsArr.forEach((element, index) => {
    tbody[0].innerHTML += `
                <tr>
                        <td>${index + 1}</td>
                        <td>${element.productName}</td>
                        <td title = '${
                          element.productDescribtion
                        }'>${element.productDescribtion.substr(0, 20)} ...</td>
                        <td>E£ ${element.productPrice}</td>
                        <td><img width = "120" height = "120" src = "${
                          element.productImgUrl
                        }"></td>
                        <td>${element.productCategory}</td>
                        <td><button class="btn btn-warning" type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        onclick="editeProduct(${index})"
                        data-bs-target="#updateProduct"><i class="fa-solid fa-pen-to-square"></i></button></td>
                        <td><button class="btn btn-danger" onClick = 'deleteProduct(${index})'><i class="fa-regular fa-trash-can"></i></button></td>
                </tr>
        `;
  });
};
// delete Product
let deleteProduct = (index) => {
  productsArr.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productsArr));
  showProducts();
};
// edite products info
let globalId;
function editeProduct(index) {
  globalId = index;
  updateInputs[0].value = productsArr[index].productName;
  updateDescription.value = productsArr[index].productDescribtion;
  updateInputs[1].value = productsArr[index].productPrice;
  updateInputs[2].value = productsArr[index].productImgUrl;
  updateCategory.value = productsArr[index].productCategory;
}
// Update product info
let updateProductInfo = (globalId) => {
  productsArr[globalId].productName = updateInputs[0].value;
  productsArr[globalId].productDescribtion = updateDescription.value;
  productsArr[globalId].productPrice = updateInputs[1].value;
  productsArr[globalId].productImgUrl = updateInputs[2].value;
  productsArr[globalId].productCategory = updateCategory.value;
  localStorage.setItem("products", JSON.stringify(productsArr));
  showProducts();
};
// add admin
let addAdmins = () => {
  let admin = {
    adminName: addAdmin[0].value,
    adminEmail: addAdmin[1].value,
    adminPassword: addAdmin[2].value,
  };
  adminArr.push(admin);
  localStorage.setItem("admins", JSON.stringify(adminArr));
  console.log(adminArr);
};
// show all users in table
function showUsers() {
  tbody[1].innerHTML = "";
  usersArr.forEach((element, id) => {
    tbody[1].innerHTML += `
        <tr>
            <td>${id + 1}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
        </tr>
        
        `;
  });
}
// show product table
let showProductTable = () => {
  if (table[1].classList.contains("showTable")) {
    table[1].classList.remove("showTable");
    ShowUserBtn.classList.replace("btn-secondary", "btn-info");
    ShowUserBtn.innerText = "Show Users";
  }
  table[0].classList.toggle("showTable");
  if (table[0].classList.contains("showTable")) {
    ShowProdcutBtn.classList.replace("btn-info", "btn-secondary");
    ShowProdcutBtn.innerText = "Hide Products";
  } else {
    ShowProdcutBtn.classList.replace("btn-secondary", "btn-info");
    ShowProdcutBtn.innerText = "Show Products";
  }
};
// show users table
let showUsersTable = () => {
  if (table[0].classList.contains("showTable")) {
    table[0].classList.remove("showTable");
    ShowProdcutBtn.classList.replace("btn-secondary", "btn-info");
    ShowProdcutBtn.innerText = "Show Products";
  }
  table[1].classList.toggle("showTable");
  if (table[1].classList.contains("showTable")) {
    ShowUserBtn.classList.replace("btn-info", "btn-secondary");
    ShowUserBtn.innerText = "Hide Users";
  } else {
    ShowUserBtn.classList.replace("btn-secondary", "btn-info");
    ShowUserBtn.innerText = "Show Users";
    ShowProdcutBtn.classList.replace("btn-secondary", "btn-info");
    ShowProdcutBtn.innerText = "Show Products";
  }
};
showUsers();
showProducts();
