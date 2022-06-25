// Create a Set
const letters = new Set(["a", "b", "c"]);

// Display set.size
document.getElementById("demo").innerHTML = letters.size;

//another way Create a Set and add literal values:



// Create a Set
const Shorty = new Set();

// Add Values to the Set
Shorty.add("a");
Shorty.add("b");
Shorty.add("c");

// Display set.size
document.getElementById("demo1").innerHTML = Shorty.size;


//another way
//Create a set and add variables

// Create a Set
const bluff = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add the Variables to the Set
bluff.add(a);
bluff.add(b);
bluff.add(c);
bluff.add(c);//only the first will be saved
bluff.add(c);
bluff.add(c);


// Display set.size
document.getElementById("demo2").innerHTML = bluff.size;

// List all Elements
let text = "";
letters.forEach(function (value) {
    text += value + "<br>";
})

document.getElementById("d1").innerHTML = text;
