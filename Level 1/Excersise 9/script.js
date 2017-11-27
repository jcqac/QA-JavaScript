"use strict";
function concat()
{
	var str = document.getElementById("iPhrase").value;
	var num = parseInt(document.getElementById("iNum").value, 10);	
	
	document.getElementById("output").value = str + num;
}