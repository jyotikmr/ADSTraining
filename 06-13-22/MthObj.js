document.getElementById("demo").innerHTML =
    "<p><b>Math.E:</b> " + Math.E + "</p>" +
    "<p><b>Math.PI:</b> " + Math.PI + "</p>" +
    "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
    "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
    "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
    "<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
    "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
    "<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";


//round method1
document.getElementById("demo1").innerHTML = Math.round(4.6);

//round method 2
document.getElementById("demo2").innerHTML = Math.ceil(4.4);

//round method 3
document.getElementById("demo3").innerHTML = Math.floor(4.7);

//round method 4
document.getElementById("demo4").innerHTML = Math.trunc(4.7);

// returns whether number is positive negative or null
document.getElementById("demo5").innerHTML = Math.sign(4);

//square root finder method
document.getElementById("demo6").innerHTML = Math.sqrt(64);

// absolute value of a given no.
document.getElementById("demo7").innerHTML = Math.abs(-4.7);

// method to  return sin of any number
document.getElementById("demo8").innerHTML =
    "The sine value of 90 degrees is " + Math.sin(90 * Math.PI / 180);

//method to reurn cos of any number
document.getElementById("demo9").innerHTML =
    "The cosine value of 0 degrees is " + Math.cos(0 * Math.PI / 180);

// math.max returns highest value
document.getElementById("d1").innerHTML =
    Math.max(0, 150, 30, 20, -8, -200);

//math.min returns lowest value
document.getElementById("d2").innerHTML =
    Math.min(0, 150, 30, 20, -8, -200);

//random no. between 0 to 1
document.getElementById("m1").innerHTML = Math.random();

//returns the natural log of a number
document.getElementById("m2").innerHTML = Math.log(2);

//returns the base 10 log of a no.
document.getElementById("r1").innerHTML = Math.log10(1000);

