let eyes = document.getElementById("eye");
let password = document.getElementById("password");

eyes.onclick = function() {
    if (password.type == "password") {
        password.type = "text";
        eyes.classList.remove("fa-solid", "fa-eye-slash");
        eyes.classList.add("fa-solid", "fa-eye");
    } else {
        password.type = "password";
        eyes.classList.remove("fa-solid", "fa-eye");
        eyes.classList.add("fa-solid", "fa-eye-slash");
    }
};
