const fruits = ["Banana", "Orange", "Apple", "Mango", "lemon"];
document.getElementById("demo").innerHTML = fruits.toString();

//join
document.getElementById("demo1").innerHTML = fruits.join(" * ");

//pop
document.getElementById("pop1").innerHTML = fruits;
fruits.pop();
document.getElementById("pop2").innerHTML = fruits;

//push
document.getElementById("push1").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("push2").innerHTML = fruits;

//shift
document.getElementById("shift1").innerHTML = fruits;
fruits.shift();
document.getElementById("shift2").innerHTML = fruits;

//unshift
document.getElementById("us1").innerHTML = fruits;
fruits.unshift("lichi");
document.getElementById("us2").innerHTML = fruits;

//delete
document.getElementById("dt1").innerHTML =
    "The first fruit is: " + fruits[0];

delete fruits[0];

document.getElementById("dt2").innerHTML =
    "The first fruit is: " + fruits[0];

//concat
const myGirls = ["tina", "timtim"];
const myBoys = ["rohan", "abhi", "ajay"];
const myChildren = myGirls.concat(myBoys);

document.getElementById("cc1").innerHTML = myChildren;

//concat 2
const a1 = ["malfoy", "harry"];
const a2 = ["albus", "serius", "snape"];
const a3 = ["hermoiene", "ron"];

const myChildren1 = a1.concat(a2, a3);

document.getElementById("cc2").innerHTML = myChildren1;

//add new items to an array
document.getElementById("sl1").innerHTML = fruits;

fruits.splice(2, 0, "cherry", "pineapple");
document.getElementById("sl2").innerHTML = fruits;

//slice
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1);
document.getElementById("aa2").innerHTML = fruits2 + "<br><br>" + citrus;