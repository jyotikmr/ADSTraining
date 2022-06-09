
let x = 123e5;
let y = 123e-5;
document.getElementById("demo").innerHTML = x + "<br>" + y;

// we will go till the threshold next
let a = 999999999999999;
let b = 9999999999999999;
document.getElementById("demo1").innerHTML = a + "<br>" + b;

//float values
let r = 0.2 + 0.1;
document.getElementById("demo3").innerHTML = "0.2 + 0.1 = " + r;
let s = (0.2 * 10 + 0.1 * 10) / 10;
document.getElementById("demo4").innerHTML = "0.2 + 0.1 = " + s;

let q = "10";
let w = "20";
let t = q + w;
document.getElementById("demo5").innerHTML = t;

//string becomes a number
document.getElementById("demo6").innerHTML = 100 / "10";

//how a situation returns nan 
let myNumber = 2;
let po1 = "";
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    po1 = po1 + myNumber + "<br>";
}
document.getElementById("demo7").innerHTML = po1;

// x is an object
let v = new Number(500);

// y is an object
let n = new Number(500);

document.getElementById("demo8").innerHTML = (v == n);