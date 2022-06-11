//new Date() creates a new date object with the current date and time:
const d = new Date();
document.getElementById("demo").innerHTML = d;

//new Date(year, month, ...) creates a new date object with a specified date and time.
//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)

const da1 = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("demo1").innerHTML = da1;

//displaying date
const da2 = new Date();
document.getElementById("demo2").innerHTML = da2.toString();

//displaying  short date
const da3 = new Date("03/25/2015");
document.getElementById("demo3").innerHTML = da3;

//parsing the date
let msec = Date.parse("March 21, 2012");
const da4 = new Date(msec);
document.getElementById("demo4").innerHTML = da4;