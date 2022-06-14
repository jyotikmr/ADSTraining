
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

document.getElementById("demo").innerHTML = fruits.get("apples");

//using map.set()

fruits.set("apples", 200);

document.getElementById("demo1").innerHTML = fruits.get("apples");

// Deleting Map Element
// Delete an Element
fruits.delete("apples");

document.getElementById("demo2").innerHTML = fruits.size;

//map has 
document.getElementById("demo3").innerHTML = fruits.has("apples");

//enteries
let text = "";
for (const x of fruits.entries()) {
    text += x + "<br>";
}

document.getElementById("demo4").innerHTML = text;