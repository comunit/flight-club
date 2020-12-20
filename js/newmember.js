var signUpEmail = document.getElementById("email_sign-up");
var signUpPassword = document.getElementById("create-a-password");
var NextButton = document.getElementById("next-button");
var SignUpPTag = document.getElementById("sign-up-p-tag");
var spinner = document.getElementById("spinner");
var step = 1;

NextButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (step == 1) {
    console.log("step-1");
    signUpEmail.style.width = "0";
    spinner.style.display = "block";
    NextButton.style.display = "none";
    setTimeout(() => {
      signUpEmail.style.display = "none";
      signUpPassword.style.display = "inline-block";
      SignUpPTag.innerHTML = "Create a password for your account";
      signUpPassword.focus();
      spinner.style.display = "none";
      NextButton.style.display = "block";
      ShowErrorMessage("Your Email already exists please log in");
      step = 2;
    }, 1000);
  }
});

// call this function with what you wana display as a message
function ShowErrorMessage(message) {
  document.getElementById("errordivp").innerHTML = message;
  document.getElementById("error-div").style.display = "block";
  spinner.style.display = "none";
  setTimeout(function () {
    document.getElementById("error-div").style.display = "none";
    document.getElementById("errordivp").innerHTML = "";
  }, 10000);
}
