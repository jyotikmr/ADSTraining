
const person = { fname: "Jyoti", lname: "Kumari", age: 25 };

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;

// For In Over Array
const numbers = [45, 4, 9, 16, 25];

let txt1 = "";
for (let xa in numbers) {
    txt1 += numbers[xa] + "<br>";
}

document.getElementById("demo1").innerHTML = txt1;
