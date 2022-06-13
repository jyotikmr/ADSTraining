
const d = new Date();
d.setFullYear(2022, 06, 13);
document.getElementById("demo").innerHTML = d;

//set month
const d1 = new Date();
d1.setMonth(11);
document.getElementById("demo1").innerHTML = d1;

const d2 = new Date();
d2.setHours(22);
document.getElementById("demo2").innerHTML = d2;

//set seconds of a date object
const d3 = new Date();
d3.setSeconds(30);
document.getElementById("demo3").innerHTML = d3;



//Dates can easily be compared.

//The following example compares today's date with January 14, 2100:

let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}

document.getElementById("demo4").innerHTML = text;