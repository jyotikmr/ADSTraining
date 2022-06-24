
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

// Display age
document.getElementById("demo").innerHTML =
    "My father is " + myFather.age + ".";

const myMother = new Person("Sally", "Rally", 48, "green");

// Add a name method to first object
myFather.name = function () {
    return this.firstName + " " + this.lastName;
};

// Display full name
document.getElementById("demo1").innerHTML =
    "My father is " + myFather.name();

document.getElementById("demo2").innerHTML =
    "My father is " + myFather.nationality + ". My mother is " + myMother.nationality; 