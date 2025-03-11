const introText = "Hi, I'm ";
const nameText = "Sandeep Kumar";
let introIndex = 0;
let nameIndex = 0;
const speed = 100;

function typeIntroText() {
  if (introIndex < introText.length) {
    document.getElementById("intro-text").innerHTML += introText.charAt(introIndex);
    introIndex++;
    setTimeout(typeIntroText, speed);
  } else {
    setTimeout(typeNameText, speed); // Start typing the name after the intro
  }
}

function typeNameText() {
  if (nameIndex < nameText.length) {
    document.getElementById("name-text").innerHTML += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeNameText, speed);
  } else {
    // Remove cursor after typing ends
    document.getElementById("cursor").style.display = "none";
  }
}

// Start typing animation when the page loads
window.onload = function() {
  setTimeout(typeIntroText, 500);
};