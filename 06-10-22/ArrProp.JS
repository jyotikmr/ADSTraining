//returns the length of array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.length;

// accessing the first array element 

document.getElementById("demo1").innerHTML = fruits[0];

//accesing the last element of the array

document.getElementById("demo2").innerHTML = fruits[fruits.length - 1];

// looping through the array using for loop
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo3").innerHTML = text;

//adding a new element to the array
document.getElementById("demo4").innerHTML = fruits;

function myFunction() {
  fruits.push("Lemon");
  document.getElementById("demo4").innerHTML = fruits;
}

//using length method
document.getElementById("demo5").innerHTML = fruits;

function myFunction1() {
  fruits[fruits.length] = "Potato";
  document.getElementById("demo5").innerHTML = fruits;
}
 //associative array
 const person = [];
 person[0] = "Jyoti";
 person[1] = "Kumari";
 person[2] = 23; 
 document.getElementById("demo6").innerHTML =
 person[0] + " " + person.length;


 //recognising a array using typeof
 document.getElementById("demo7").innerHTML = typeof fruits;
 