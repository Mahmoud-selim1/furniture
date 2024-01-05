let currentPage = window.location.pathname.split("/");
currentPage = currentPage[currentPage.length-1]
console.log(currentPage);
let inputs = document.querySelectorAll("input");
let usersArr = JSON.parse(localStorage.getItem("users"))||[];
let loggedIn = JSON.parse(localStorage.getItem("logged-in"))
if(loggedIn) {
    window.location.replace("../../index.html")
}
if(currentPage == 'login.html') {
    //console.log(inputs);
    function login() {
        let logEmail = inputs[0].value.toLowerCase();
        let logPassword = inputs[1].value.toLowerCase();
        let Name;
        let canLogin = false;
        usersArr.forEach(element => {
            if(logEmail == element.email && logPassword == element.password) {
            canLogin = true;
            Name = element.username;
        }
        });
        if(canLogin) {
            localStorage.setItem("logged-in",JSON.stringify({Username : Name , Email : logEmail}))
            window.location.replace("../../index.html")
        }
        else {
            alert("Incorrect Password or Username")
        }
    }
}
else if(currentPage == 'register.html' ) {
    // Create User For Register
    function createUser() {
        let usersObj = {
            username : inputs[0].value.toLowerCase(),
            email : inputs[1].value.toLowerCase(),
            password : inputs[2].value
        }
        usersArr.push(usersObj);
        localStorage.setItem("users",JSON.stringify(usersArr))
        window.location.replace("../access/login.html")
    }
}
