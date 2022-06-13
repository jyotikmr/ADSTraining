
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;


//2 statement for loop


let i = 0;
let len = cars.length;
let text1 = "";

for (; i < len;) {
    text1 += cars[i] + "<br>";
    i++;
}
document.getElementById("demo1").innerHTML = text1;

//using let or var statement in the for loop
let i2 = 5;
for (let i2 = 0; i2 < 10; i2++) {
    // some statements
}
document.getElementById("demo2").innerHTML = i2;