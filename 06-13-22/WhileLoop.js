
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;

//Do While Loop
let txt = "";
let ia = 0;

do {
  txt += "<br>The number is " + ia;
  ia++;
}
while (ia < 10);  

document.getElementById("demo1").innerHTML = txt;