//****************input checkbox***********************
var chbox = document.getElementById('one'); //Ловимо інпут в змінну
chbox.addEventListener("click",  function(){ //вішаємо хендлер
  var elem = document.getElementsByTagName("body")[0];
  if (chbox.checked){
    elem.style.background  = '#f00';
  } else {
    elem.style.background  = '#fff';
  }
}
);

