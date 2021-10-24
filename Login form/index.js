
const loginContainer = document.querySelector(".login-container");
const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");

const loginPassword = document.getElementById("loginPassword");
const showPasswordIcon = document.querySelector("i.fa-eye");
// console.log(loginPassword, showPasswordIcon);

showPasswordIcon.addEventListener('click', showPassword);

// show Password
function showPassword() {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        showPasswordIcon.style.color = "red";
    } else {
        loginPassword.type === "password";
        showPasswordIcon.style.color = "#ddd";
    }
}
// Simple Validation

loginForm.addEventListener("submit", submitValidation);

function submitValidation(event) {
    event.preventDefault();
    // User name validation
    if (loginUsername.value === " " || loginUsername.value.length < 3) {
        console.log("empty");
    } else {
        console.log("not empty");
    }
    // Password validation
    if (loginPassword.value === " " || loginPassword.value.length < 6) {
        console.log("empty");
    } else {
        console.log("not empty");
    }
}