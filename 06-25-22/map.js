// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

document.getElementById("demo").innerHTML = fruits.get("apples");

//another way to add value to the keys in map
const frts = new Map();

// Set Map Values
frts.set("apples", 500);
frts.set("bananas", 300);
frts.set("oranges", 200);

document.getElementById("demo1").innerHTML = frts.get("apples");// get() method gets the value of key in the map

// Delete an Element
fruits.delete("apples");

document.getElementById("demo").innerHTML = fruits.size;// this gives us the no of elements in a map

let text = "";
frts.forEach(function (value, key) {
    text += key + ' = ' + value + "<br>"
})

document.getElementById("de1").innerHTML = text;