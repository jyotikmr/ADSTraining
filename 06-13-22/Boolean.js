
document.getElementById("d1").innerHTML = Boolean(10 > 9);

let x = 0;
document.getElementById("d2").innerHTML = Boolean(x);

//boolean obj safely 
// x is a boolean
let x1 = false;

// y is an object
let y1 = new Boolean(false);

document.getElementById("b1").innerHTML = typeof x1 + "<br>" + typeof y1;

//test 1
const x2 = new Boolean(false);
const y2 = new Boolean(false);
document.getElementById("b2").innerHTML = (x2 === y2);