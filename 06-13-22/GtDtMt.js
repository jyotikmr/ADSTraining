
const d = new Date();
document.getElementById("demo").innerHTML = d.getTime();

//get full year method returns the full year ig datre
const d1 = new Date();
document.getElementById("demo1").innerHTML = d1.getFullYear();

//get month returns month no.
const d2 = new Date();
document.getElementById("demo2").innerHTML = d2.getMonth() + 1;

//returns hour in the date
const d3 = new Date();
document.getElementById("demo3").innerHTML = d3.getHours();

//gets minutes in the date
const d4 = new Date();
document.getElementById("demo4").innerHTML = d4.getMinutes();

//The getDay() method returns the weekday as a number:
const d5 = new Date();
document.getElementById("demo5").innerHTML = d5.getDay();
