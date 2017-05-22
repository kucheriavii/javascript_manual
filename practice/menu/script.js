//основний хендлер. Працює коли мишку наведено на блок з субменю
document.getElementById("nav").onmouseover = function(e){ 			//працювати будемо з дівом nav
	var target = e.target;											//дивимось на якому елементі зараз мишка
	if (target.className == 'menu-item'){ 							//якщо мишка на елементі з класом menu-item
		var s = target.getElementsByClassName('submenu');
		closeMenu();												//закриваємо всі елементи
		s[0].style.display = 'block';								//показуємо вибраний елемент
	}
}
//підменю слід відображати лише тоді коли мишка знаходиться на div.menu-item або div.submenu
document.onmouseover = function(e){
	var target = e.target;
	if(target.className!="menu-item" && target.className!='submenu'){//Якщо мишка не на одному не на другому div то не показуємо підменю
		closeMenu();
	}
}
//Функція, яка ховає все зайве
function closeMenu(){
	var menu = document.getElementById('nav');							
	var subm = document.getElementsByClassName('submenu');			//знаходимо всі div.submenu
	for (var i = 0; i < subm.length; i++) {
		subm[i].style.display = 'none'								//ховаємо всі div.submenu
	}
}

