let button = document.getElementById("share-button");
let shareBox = document.querySelector(".share");

document.addEventListener("click", (e) => {
  if (!button.contains(e.target)) {
    shareBox.classList.remove("active");
    button.classList.remove("active");
  } else {
    shareBox.classList.toggle("active");
    button.classList.toggle("active");
  }
});
