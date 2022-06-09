
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
//accessing the  full array
document.getElementById("demo").innerHTML = cars;

//changing the element value atindex 0
cars[0] = "Opel";
document.getElementById("demo1").innerHTML = cars;


const person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo2").innerHTML = person.firstName;

//properties 1.length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruits.length;