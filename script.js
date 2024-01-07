const toogle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const a = document.querySelector("a");
const span = document.querySelector("sphover");
const i = document.querySelector("i");

toogle.addEventListener("click", function () {
  this.classList.toggle("bi-moon-stars");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background =
      "url(../../assets/img/background.jpg) no-repeat center center / cover";
    body.style.color = "#f9cc41";
    body.style.transition = "1 s";
    a.style.color = "#f9cc41";
    a.style.border = "3px solid #f9cc41";
    sphover.style.background = "white";
    i.style.color = "black";
  } else {
    body.style.background =
      "url(../../assets/img/background1.jpg) no-repeat center center / cover";
    body.style.color = "white";
    body.style.transition = "1s";
    a.style.color = "white";
    a.style.border = "3px solid white";
    sphover.style.background = "orange";
  }
});
