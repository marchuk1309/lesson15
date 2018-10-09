var age = prompt("Введите Ваш возраст");
var name = prompt("Введите Ваше имя");
var subscript = confirm("У Вас есть подписка?");
console.log(subscript);
 function check() {
   alert("Вы допущены к просмотру сайта");
   console.log("Вы допущены к просмотру сайта");
 }

if ((age >= 18) && (subscript == true)){
  check();
}

else {
  alert("Вы не допущены к просмотру сайта");
  console.log("Вы не допущены к просмотру сайта");
}
