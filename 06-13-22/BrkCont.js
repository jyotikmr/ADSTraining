
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

//CONTINUE 
let txt = "";
for (let ia = 0; ia < 10; ia++) {
  if (ia === 3) { continue; }
  txt += "The number is " + ia + "<br>";
}
document.getElementById("demo1").innerHTML = txt;

//Break
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text1 = "";

list: {
  text1 += cars[0] + "<br>"; 
  text1 += cars[1] + "<br>"; 
  break list;
  text1 += cars[2] + "<br>"; 
  text1 += cars[3] + "<br>"; 
}

document.getElementById("dm1").innerHTML = text1;