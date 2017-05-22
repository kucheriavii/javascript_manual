function fun1(){
	var sel = document.getElementById('mySelect').selectedIndex;//Возвращает порядковый номер опции
	var options = document.getElementById('mySelect').options;//Возвращает список опций
	alert("you chose " + options[sel].text)//Нужный вывод
}