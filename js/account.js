var accountOption = document.getElementById("account-options");
var profileMain = document.getElementById("profile-main");
var profileContainer = document.getElementById("profile-container");
var billingMain = document.getElementById("billing-main");
var billingContainer = document.getElementById("billing-container");
var faqsMain = document.getElementById("faqs-main");
var faqsContainer = document.getElementById("faqs-container");
var backButton = document.getElementsByClassName("back-img");
var contentContainer = document.getElementsByClassName("content-container");
var mainH2Img = document.getElementById("main-h2-img");
var mainWelcomeHeading = document.getElementById("Welcome-main-heading");

profileMain.addEventListener("click", function () {
  profileContainer.style.display = "flex";
  accountOption.style.display = "none";
  mainWelcomeHeading.innerHTML = "Profile";
  mainH2Img.style.display = "block";
  mainH2Img.src =
    "https://www.flaticon.com/svg/static/icons/svg/633/633780.svg";
});

billingMain.addEventListener("click", function () {
  console.log(12);
  billingContainer.style.display = "flex";
  accountOption.style.display = "none";
  mainWelcomeHeading.innerHTML = "Billing";
  mainH2Img.style.display = "block";
  mainH2Img.src =
    "https://www.flaticon.com/svg/static/icons/svg/1371/1371962.svg";
});

faqsMain.addEventListener("click", function () {
  faqsContainer.style.display = "flex";
  accountOption.style.display = "none";
  mainWelcomeHeading.innerHTML = "Faqs";
  mainH2Img.style.display = "block";
  mainH2Img.src =
    "https://www.flaticon.com/svg/static/icons/svg/942/942802.svg";
});

// go back button
for (let i = 0; i < backButton.length; i++) {
  const goBackButton = backButton[i];
  goBackButton.addEventListener("click", () => {
    for (let i = 0; i < contentContainer.length; i++) {
      const contentContainers = contentContainer[i];
      contentContainers.style.display = "none";
      document.getElementsByClassName("flex-container")[0].style.display =
        "flex";
      mainWelcomeHeading.innerHTML = "<strong>Welcome</strong> Imran";
      mainH2Img.style.display = "none";
    }
  });
}

// faqs functionalty
var questions = document.getElementsByClassName("quesions");

for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  let chevron = document.getElementsByClassName(question.id + "-chevron")[0];
  question.addEventListener("click", function () {
    if (question.nextSibling.nextSibling.style.display == "block") {
      question.nextSibling.nextSibling.style.display = "none";
      chevron.style.transform = "rotate(0deg)";
    } else {
      question.nextSibling.nextSibling.style.display = "block";
      chevron.style.transform = "rotate(180deg)";
    }
  });
}
