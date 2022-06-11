//call back function to call a function once for each array element
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
    txt += value + "<br>";
}
//array map
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction3);

document.getElementById("mo1").innerHTML = numbers2;

function myFunction3(value, index, array) {
    return value * 2;
}
//array filter

const over18 = numbers.filter(myFunction1);

document.getElementById("demo").innerHTML = over18;

function myFunction1(value) {
    return value > 18;
}

//addition of all elements in array
let sum = numbers.reduce(myFunction5);

document.getElementById("add1").innerHTML = "The sum is " + sum;

function myFunction5(total, value) {
    return total + value;
}

//reduce array into single element
const numb = [45, 4, 9, 16, 25];
let sum1 = numb.reduceRight(myFf);

document.getElementById("rr1").innerHTML = "The sum is " + sum1;

function myFf(total, value) {
    return total + value;
}


//every method checks if all the array values passes the test
let allOver18 = numb.every(myFun1);

document.getElementById("ever1").innerHTML = "All over 18 is " + allOver18;

function myFun1(value) {
    return value > 18;
}

//some method checks iff some of array element passes the certain conditions or not
let someOver18 = numb.some(myFu1);

document.getElementById("some1").innerHTML = "Some over 18 is " + someOver18;

function myFu1(value, index, array) {
    return value > 18;
}

//index of element
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

document.getElementById("idx1").innerHTML = "Apple is found in position " + position;


//find()
let first = numb.find(myFn1);

document.getElementById("fnd1").innerHTML = "First number over 18 is " + first;

function myFn1(value) {
    return value > 18;
}

//array from
const myArr = Array.from("ABCDEFG");
document.getElementById("frm1").innerHTML = myArr;