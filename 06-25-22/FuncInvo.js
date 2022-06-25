function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(10, 2); //will return 20

document.getElementById("demo1").innerHTML = window.myFunction(10, 4);

let x = myFunction();
function myFunction() {
    return this;
}
document.getElementById("demo2").innerHTML = x;

const myObject = {
    firstName: "Jyoti",
    lastName: "Kumari",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
document.getElementById("de1").innerHTML = myObject.fullName(); //will return "Jyoti Kumari"


function myF(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

const myObj = new myFu("Jyoti", "Kumari")
document.getElementById("de1").innerHTML = myObj.firstName; 
