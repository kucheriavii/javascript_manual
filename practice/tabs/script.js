// цей приклад дуже кривий
var tab;
var tabContent;

window.onload = function () {
	tabContent = document.getElementsByClassName("tabContent");
	tab = document.getElementsByClassName("tab");
	hideTabsContent(1);
}
function hideTabsContent(a){
	for (var i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('whiteborder');
	}
}

document.getElementById("tabs").onclick = function (event) {
	var target = event.target;
	if (target.className == 'tab'){
		for(i=0; i<tab.length; i++){
			if(target==tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent (element) {
	if(tabContent[element].classList.contains("hide"));
	hideTabsContent(0);
	tab[element].classList.add('whiteborder');
	tabContent[element].classList.remove('hide');
	tabContent[element].classList.add('show');
}