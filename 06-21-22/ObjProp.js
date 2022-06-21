
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 25,
    eyecolor: "blue"
};

document.getElementById("demo").innerHTML = person.firstname + " is " + person.age + " years old.";

//looping obj properties
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

document.getElementById("demo1").innerHTML = txt;

//adding new properties

person.nationality = "English";
document.getElementById("demo2").innerHTML =
    person.firstname + " is " + person.nationality + ".";

//deleting an object property
//here we will delete age option
delete person["age"];

document.getElementById("demo3").innerHTML =
    person.firstname + " is " + person.age + " years old.";

//accessing some nested objects
const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
document.getElementById("demo4").innerHTML = myObj.cars["car2"];


//accessing the nested javascript objects is done using for in loop 
let x = "";
const myObj1 = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

for (let i in myObj1.cars) {
    x += "<h2>" + myObj1.cars[i].name + "</h2>";
    for (let j in myObj1.cars[i].models) {
        x += myObj1.cars[i].models[j] + "<br>";
    }
}

document.getElementById("de1").innerHTML = x;