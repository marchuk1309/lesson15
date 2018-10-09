var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var myList = document.getElementById("list");
var main = document.getElementById("main");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

function addItem() {
  var newLi = document.createElement("li");
  newLi.innerHTML = prompt("Введите свою задачу");
  if (newLi.innerHTML != false) {
    newLi.className = "item";
    myList.appendChild(newLi);
    popup.style.display = "none";
  }
  else {
    if (story.length == 0) {
      return popup.style.display = "block";
    }
  }
}

function delItem() {
  myList.removeChild(story[0]);
  if (story.length == 0) {
    popup.style.display = "block";
  }
}

function closePopup() {
  popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);
