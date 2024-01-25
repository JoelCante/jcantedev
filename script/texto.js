var dir = 1, id = 0, strpos = 0,clrpos = 0;
var speed = 100, time = 5000;


var str = new Array(3);
str[0] = "UI/UX";
str[1] = "Designer";
str[2] = "Frontend";
str[3] = "Developer";

var color = new Array(3);
color[0] = "#b3bd75";
color[1] = "#2779ca";
color[2] = "#048390";
color[3] = "#c76c6c";

window.onload = function() 
{
    setInterval('ParseText()', speed);
}

function ParseText()
{if(dir==1)AddChar();else setTimeout('RemChar()',1200);ShowItem();}
function AddChar()
{strpos ++;if(strpos>str[id].length) dir=-1; document.getElementById("escribir-texto").style.color = color[id]; }

function RemChar()
{strpos --;if(strpos<0) {dir=1; NextItem();}}

function ShowItem()
{var result = str[id].substring(0, strpos);
document.getElementById("escribir-texto").innerHTML = result;
}

function ChangeColor(){
    document.getElementById("escribir-texto").style.color = "Blue";   
}

function NextItem()
{id++;if(id>str.length-1) id=0;}