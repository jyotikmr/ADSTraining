
const person = {
    name: "John",
    age: 30,
    city: "New York",

};

document.getElementById("demo").innerHTML = person;

//way to display details of the objects
document.getElementById("demo1").innerHTML = person.name + ", " + person.age + ", " + person.city;

//using loop to display objects 
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
};

document.getElementById("demo2").innerHTML = txt;

//making an array of object properties
const myArray = Object.values(person);//Any JavaScript object can be converted to an array using Object.values():

//now just display this javascript array
document.getElementById("demo3").innerHTML = myArray;


//Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

let myString = JSON.stringify(person);

//now we can display this string 
document.getElementById("demo4").innerHTML = myString;


//convert the functions into strings before stringifying.
const person2 = {
    name: "Jyoti",
    age: function () { return 23; }
};
person.age = person.age.toString();

let Srg = JSON.stringify(person2);
document.getElementById("demo5").innerHTML = Srg;


