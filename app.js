const text = "Hello, my name is Sahaj :)";

let index = 0;

function writeText() {
  document.getElementById("myIntro").innerHTML =
    "<h1>" + text.slice(0, index) + "</h1>";

  index++;

  if (index > text.length) {
    return;
  }
}

setInterval(writeText, 100);

const text12 =
  "                                 A few of my hobbies include playing golf, basketball and chess. Be sure to checkout my Github, LinkedIn and Instagram.";

let index1 = 0;

function writeText12() {
  document.getElementById("myHobbies").innerHTML =
    "<h3>" + text12.slice(0, index) + "</h3>";

  index++;

  if (index1 > text12.length) {
    return;
  }
}

setTimeout(function () {
  setInterval(writeText12, 100);
}, 3000);

function darkMode() {
  var doc = document.body;
  doc.classList.toggle("dark-mode");
}

var button = document.getElementById("coolBeans");

button.addEventListener("click", function () {
  darkMode();
});
