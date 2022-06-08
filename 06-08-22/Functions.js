//making a normal function
function avg(a, b) {// a and b are the parameters 
  c = (a + b) / 2;
  return c; // after return the function will stop working 

}
c1 = avg(4, 6);// this here invokes the functions
c2 = avg(12, 14);
console.log(c1, c2);

// makinng a function to convert Fahrenheit to Celsius
document.getElementById("demo").innerHTML =
  "The temperature is " + toCelsius(77) + " Celsius";

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
} 
