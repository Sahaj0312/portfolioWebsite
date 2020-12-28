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

const text1 = document.querySelector(".fancy");
const strText1 = text1.textContent;
const splitText1 = strText1.split("");
text1.textContent = "";

for (let i = 0; i < splitText1.length; i++) {
  text1.innerHTML += "<span>" + splitText1[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  let span = text1.querySelectorAll(`span`)[char];
  span.classList.add(`fade`);
  char++;
  if (char === text1.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
