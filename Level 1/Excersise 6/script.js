"use strict";
class Sim 
{
	constructor(nm, ag, occ)
	{
		this.name = nm;
		this.age = ag;
		this.occupation = occ;
	}
	
	incAg()
	{
		this.age ++;
		document.getElementById("iAge").value = this.age;
		this.upOp();
	}
	
	upOp()
	{
		//alert("step2");
		document.getElementById("output").value = JSON.stringify(this);
	}
}

var Simverse = (function() 
{
	var sim;

    return {
		create: function()
		{
			sim = new Sim(document.getElementById("iName").value, parseInt(document.getElementById("iAge").value, 10), document.getElementById("iOccupation").value)
			//alert("step1");
			sim.upOp();
		},
        increment: function()
		{
			sim.incAg();
		}
    };
})();