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

function darkMode() {
  var doc = document.body;
  doc.classList.toggle("dark-mode");
}

var button = document.getElementById("coolBeans");

button.addEventListener("click", function () {
  darkMode();
});
