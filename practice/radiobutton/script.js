//****************input radio***********************
var start = document.getElementById("start");
start.addEventListener("click", fun1)
function fun1(){
	var radio = document.getElementsByName("r1");
	for (var i = 0; i < radio.length; i++) {
		if(radio[i].checked){
			alert(radio[i].value);
		}
	}
}