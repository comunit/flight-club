var signUpEmail = document.getElementById("email_sign-up");
var signUpPassword = document.getElementById("create-a-password");
var NextButton = document.getElementById("next-button");
var SignUpPTag = document.getElementById("sign-up-p-tag");
var step = 1;

NextButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (step == 1) {
    console.log("step-1");
    signUpEmail.style.width = "0";
    setTimeout(() => {
      signUpEmail.style.display = "none";
      signUpPassword.style.display = "inline-block";
      SignUpPTag.innerHTML = "Create a password for your account";
      signUpPassword.focus();
      step = 2;
    }, 1000);
  }
});
