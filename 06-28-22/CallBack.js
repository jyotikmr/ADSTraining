function myDisplayer(something) { //myDiplayer is teh name of function
    document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) { // passed to mycalculator as an argument
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);