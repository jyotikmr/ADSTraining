
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;

// for of Loop for objects

let language = "JavaScript";

let text1 = "";
for (let xa of language) {
    text2 += xa + "<br>";
}

document.getElementById("demo1").innerHTML = text2;
