const password = document.querySelector("#user_password");
const password_confirmation = document.querySelector('#user_password_confirmation');
const error_message = document.querySelector(".pass_error");

function validatePassword() {
    if (password.value !== password_confirmation.value) {
        password_confirmation.setCustomValidity("Passwords don't match");
        error_message.textContent = "Passwords don't match";
    } else {
        password_confirmation.setCustomValidity("");
        error_message.textContent = "";
    }
}

password_confirmation.addEventListener("keyup", (e) => {
    validatePassword();
});