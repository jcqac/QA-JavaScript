function fun()
{
	var inx = document.getElementById("input").value;
	//alert(inx);
	document.getElementById("output").value = this.calc(inx);;
}

function calc(array)
{
	var res = 0;
	var cal = array.split(",");
	//window.alert(cal);
	var tmpCount = cal.length;
	for (var i = 0; i < tmpCount; i++)
	{
		var tmp = parseFloat(cal[i]);
		res = res + tmp;
	}
	return res;
}