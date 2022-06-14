
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Display set.size
document.getElementById("demo").innerHTML = letters.size;


// using Foreach()

let text = "";
letters.forEach(function (value) {
    text += value + "<br>";
})

document.getElementById("demo1").innerHTML = text;