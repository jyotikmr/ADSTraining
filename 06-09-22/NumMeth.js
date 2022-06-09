
//returns a number as a string
let x = 123;
document.getElementById("demo").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();

// returns a rounder number written in exponential notation
let a = 9.656;
document.getElementById("demo1").innerHTML =
  a.toExponential() + "<br>" + 
  a.toExponential(2) + "<br>" + 
  a.toExponential(4) + "<br>" + 
  a.toExponential(6);

  //to fixed  round upto given number of digits
  let b = 9.656;
document.getElementById("demo2").innerHTML =
  b.toFixed(0) + "<br>" +
  b.toFixed(2) + "<br>" +
  b.toFixed(4) + "<br>" +
  b.toFixed(6);

  // returns a string with a number with specified length using toprecision
  let c = 10.768;
document.getElementById("demo3").innerHTML = 
  c.toPrecision() + "<br>" +
  c.toPrecision(2) + "<br>" +
  c.toPrecision(4) + "<br>" +
  c.toPrecision(6); 

  //returns number as number
  let d = 123;

document.getElementById("demo4").innerHTML = 
  d.valueOf() + "<br>" +
  (123).valueOf() + "<br>" +
  (100 + 23).valueOf();

  //converting variables in numbers
  document.getElementById("demo5").innerHTML = 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("Jyoti");

  //parseInt convert string to numbers
  document.getElementById("demo6").innerHTML = 
  parseInt("-10") + "<br>" +
  parseInt("-10.33") + "<br>" +
  parseInt("10") + "<br>" +
  parseInt("10.33") + "<br>" +
  parseInt("10 6") + "<br>" +  
  parseInt("10 years") + "<br>" +  
  parseInt("years 10"); 

  //also converts string to numbers but into float
  document.getElementById("demo7").innerHTML = 
  parseFloat("10") + "<br>" +
  parseFloat("10.33") + "<br>" +
  parseFloat("10 6") + "<br>" +  
  parseFloat("10 years") + "<br>" +
  parseFloat("years 10");  