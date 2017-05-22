function fun1(argument) {
	var rng = document.getElementById('r1'); //повзунок
	var p = document.getElementById('one'); //параграф
	var i = document.getElementById('i1'); //інпут
	var test = document.getElementById("test"); //дів
	//прописуємо дані з повзунка в параграф
	p.innerHTML = rng.value;
	//прописуємо значення повзунка в інпут
	i.value = rng.value;
	//Змнінюємо ширину діва відносно повзунка
	test.style.width = rng.value*2+"px";

}