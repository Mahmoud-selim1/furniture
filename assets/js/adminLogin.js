let adminInputs = document.querySelectorAll("input");
let adminArr = JSON.parse(localStorage.getItem("admins")) || [];
function adminLogin() {
  if (
    adminInputs[0].value.toLowerCase() == "ahmed@gmail.com" &&
    adminInputs[1].value.toLowerCase() == "123"
  ) {
    window.location.replace("admin.html");
  } else if (adminArr) {
    adminArr.forEach((element) => {
      if (
        adminInputs[0].value.toLowerCase() == element.adminEmail &&
        adminInputs[1].value.toLowerCase() == element.adminPassword
      ) {
        window.location.replace("../../admin.html");
      } else {
        alert("Incorrect Password Or Email");
      }
    });
  }
}
