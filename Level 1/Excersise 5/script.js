function fun()
{
	var nm = document.getElementById("iName").value;
	var ag = parseInt(document.getElementById("iAge").value, 10);
	var occ = document.getElementById("iOccupation").value;
	
	var sim = {name:nm, age:ag, occupation:occ};
	
	document.getElementById("output").value = JSON.stringify(sim);
}