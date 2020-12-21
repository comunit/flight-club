var cats = document.getElementsByClassName("flex-item");
var backButton = document.getElementsByClassName("back-img");
var contentContainer = document.getElementsByClassName("content-container");
var mainH2Img = document.getElementById("main-h2-img");
var mainWelcomeHeading = document.getElementById("Welcome-main-heading");

for (let i = 0; i < cats.length; i++) {
  const cat = cats[i];
  cat.addEventListener("click", () => {
    document.getElementsByClassName("flex-container")[0].style.display = "none";
    document.getElementById("profile-container").style.display = "flex";
    mainH2Img.style.display = "block";
    mainWelcomeHeading.innerHTML = "Profile";
  });
}

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
