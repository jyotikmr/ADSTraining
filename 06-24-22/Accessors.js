
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;


// Create an object:
const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
        this.language = value;
    }
};

// Set a property using set:
person.lang = "en";

// Display data from the object:
document.getElementById("demo1").innerHTML = person.language;

// Define an object
const obj = { counter: 0 };

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0; }
});
Object.defineProperty(obj, "increment", {
    get: function () { this.counter++; }
});
Object.defineProperty(obj, "decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) { this.counter -= value; }
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo2").innerHTML = obj.counter; 