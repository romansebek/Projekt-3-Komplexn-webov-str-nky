const image1 = document.querySelector(".image1");

image1.addEventListener("mouseenter", () => {
  image1.style.transform = "scale(1.1)";
});

image1.addEventListener("mouseleave", () => {
  image1.style.transform = "scale(1.0)";
});

const image2 = document.querySelector(".image2");

image2.addEventListener("mouseenter", () => {
  image2.style.transform = "scale(1.1)";
});

image2.addEventListener("mouseleave", () => {
  image2.style.transform = "scale(1.0)";
});

const image3 = document.querySelector(".image3");

image3.addEventListener("mouseenter", () => {
  image3.style.transform = "scale(1.1)";
});

image3.addEventListener("mouseleave", () => {
  image3.style.transform = "scale(1.0)";
});

// Form

const formular = document.getElementById("formular");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const notifEmail = document.querySelector(".notifEmail");
const notifPass = document.querySelector(".notifPass");

password2.addEventListener("input", () => {
  if (password1.value === password2.value) {
    notifPass.textContent = "Passwords match";
    notifPass.className = "notifPass valid";
    notifPass.style.display = "block";
  } else {
    notifPass.textContent = "Passwords do not match";
    notifPass.className = "notifPass invalid";
    notifPass.style.display = "block";
  }
});

formular.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value === "") {
    notifEmail.style.display = "block";
  } else {
    notifEmail.style.display = "none";
  }

  if (
    password1.value === "" ||
    password2.value === "" ||
    password1.value !== password2.value
  ) {
    notifPass.style.display = "block";
  } else {
    notifPass.style.display = "none";
  }
});

//Dark & Light mode
document.addEventListener("DOMContentLoaded", (event) => {
  const toggleButton = document.getElementById("toggleButton");
  const currentMode = localStorage.getItem("mode") || "light";
  document.body.classList.add(currentMode + "-mode");

  toggleButton.addEventListener("click", () => {
    const isLightMode = document.body.classList.contains("light-mode");
    if (isLightMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("mode", "light");
    }
  });
});

// Get the button
let mybutton = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
