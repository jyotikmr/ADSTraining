
myFunction();

function myFunction() {
    let carName = "Volvo";
    document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
}

document.getElementById("demo2").innerHTML = typeof carName;


//Global variables
myFunction();
// code here can use carName as a global variable
document.getElementById("demo").innerHTML = "I can display " + carName;

function myFunction() {
    carName = "Volvo";
}
