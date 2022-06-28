function myfun1()
{
	var a=parseInt(document.getElementById('number').value);
	var b=parseInt(document.getElementById('numbers').value);
	document.getElementById('answer').value=(a+b);
}
function myfun2()
{
	var a=document.getElementById('number').value;
	var b=document.getElementById('numbers').value;
	document.getElementById('answer').value=(a-b)
}
function myfun3()
{
	var a=document.getElementById('number').value;
	var b=document.getElementById('numbers').value;
	document.getElementById('answer').value=(a*b);
}
function myfun4()
{
	var a=document.getElementById('number').value;
	var b=document.getElementById('numbers').value;
	document.getElementById('answer').value=(a/b);
}