
// Create a String
const name1 = "JyotiKumari";

// List all Elements
let text = ""
for (const x of name1) {
    text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;

//over an Array
// Create aa Array
const letters = ["a", "b", "c"];

// List all Elements
let text1 = "";
for (const xa of letters) {
    text1 += xa + "<br>";
}

document.getElementById("demo1").innerHTML = text1;

//over a set 
// Create a Set
const l1 = new Set(["a", "b", "c"]);

// List all Elements
let text2 = "";
for (const xb of l1) {
    text2 += xb + "<br>";
}

document.getElementById("demo2").innerHTML = text2;

//over a map
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// List all entries
let txt = "";
for (const xc of fruits) {
    txt += xc + "<br>";
}

document.getElementById("demo3").innerHTML = txt;