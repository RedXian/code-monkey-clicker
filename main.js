var ticksPerSecond=30;
var linesOfCode=0;
var linesPerTick=0;
var costPerMonkey, costPerCoder;
var baseMonkeyCost=15, baseCoderCost=100;
var monkeys=0, coders=0;


function employee(codeName,name,baseCost,lps)
{
	this.codeName=codeName;
	this.name=name;
	this.base=baseCost;
	this.lps=lps;
	this.count=0;
	this.price=Math.round(this.baseCost*Math.pow(1.15,this.count));
	
	this.purchase=purchase;
	
	function purchase()
	{
	
	}
}

var storeItem=[];
storeItem[1]=new employee('monkey','Monkey',15,1);
storeItem[2]=new employee('coder','Coder',100,10);

function initialiseGame()
{
	costPerCoder=Math.round(baseCoderCost*Math.pow(1.15,coders));
	costPerMonkey=Math.round(baseMonkeyCost*Math.pow(1.15,monkeys));
	addButtons();
	startTime();
}

function addButtons()
{

// TODO: Add Monkey
// TODO: Add Coder
// TODO: Add Engineer
// TODO: Add Senior Engineer
// TODO: Add Team Lead
// TODO: Add Software Architect
// TODO: Add Senior Software Architect

// 


}

function startTime()
{
linesOfCode+=linesPerTick;
unlockStoreItems();
checkButtons();
document.getElementById('code').innerHTML=(Math.round(linesOfCode*10)/10).toFixed(1);
document.getElementById('monkey_total').innerHTML=monkeys;
document.getElementById('monkey_cost').innerHTML=costPerMonkey;
document.getElementById(storeItem[2].codeName+'_total').innerHTML=coders;
document.getElementById(storeItem[2].codeName+'_cost').innerHTML=costPerCoder;
document.getElementById('lps').innerHTML=Math.round(linesPerTick*10).toFixed(1);
t=setTimeout(function(){startTime()},1000/ticksPerSecond);
}

function unlockStoreItems()
{
if (linesOfCode>=baseMonkeyCost)
	document.getElementById('monkey').style.display="block";
if (linesOfCode>=storeItem[2].baseCost)
	document.getElementById(storeItem[2].codeName).style.display="block";
}


function checkButtons()
{
for (var i in storeItem)
{
	if (linesOfCode>=storeItem[i])
		document.getElementById(storeItem[i].codeName+'_btn').disabled="";
	else
		document.getElementById(storeItem[i].codeName+'_btn').disabled="disabled";
}

function writeLine()
{
linesOfCode++;
}

function buyMonkey()
{ 
if(linesOfCode>=costPerMonkey)
	{
		monkeys++;
		linesPerTick+=0.1;
		linesOfCode-=costPerMonkey;
		costPerMonkey=Math.round(baseMonkeyCost*Math.pow(1.15,monkeys));
	}
}
function buyCoder()
{ 
if(linesOfCode>=costPerCoder)
	{
		coders++;
		linesPerTick+=1;
		linesOfCode-=costPerCoder;
		costPerCoder=Math.round(baseCoderCost*Math.pow(1.15,coders));
	}
}
