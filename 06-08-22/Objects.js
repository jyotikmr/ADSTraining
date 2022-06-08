// Create an object:
const car = { type: "Fiat", model: "500", color: "white" };

// Display some data from the object:
document.getElementById("demo").innerHTML = "The car type is " + car.type;
document.getElementById("demo1").innerHTML = "The car type is " + car.model;
document.getElementById("demo2").innerHTML = "The car type is " + car.color;

// this keyword refers to an object
const person = {
    firstName: "Jyoti",
    lastName: "Kumari",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
//calling this method 
document.getElementById("demo4").innerHTML = person.fullName();