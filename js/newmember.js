var signUpEmail = document.getElementById("email_sign-up");
var signUpPassword = document.getElementById("create-a-password");
var NextButton = document.getElementById("next-button");
var SignUpPTag = document.getElementById("sign-up-p-tag");

NextButton.addEventListener("click", function (e) {
  e.preventDefault();
  signUpEmail.style.display = "none";
  signUpPassword.style.display = "inline-block";
  SignUpPTag.innerHTML = "Create a password for your account";
  signUpPassword.focus();
});
