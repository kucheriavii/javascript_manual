var inputs = document.getElementsByTagName("input");
//block
var block = document.getElementById("block");

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function(){
		//inputs range
		var rtl = document.getElementById("rtl").value;
		var rtr = document.getElementById("rtr").value;
		var rbl = document.getElementById("rbl").value;
		var rbr = document.getElementById("rbr").value;
		//inputs text
		var ttl = document.getElementById("ttl");
		var ttr = document.getElementById("ttr");
		var tbl = document.getElementById("tbl");
		var tbr = document.getElementById("tbr");
				
		ttl.value = rtl;
		ttr.value = rtr;
		tbl.value = rbl;
		tbr.value = rbr;
		
		block.style.borderRadius = rtl+'% '+rtr +'% '+rbr+'% '+rbl+'%'
		console.log(block)
	})
}