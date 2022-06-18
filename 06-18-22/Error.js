
try {
    adddlert("Welcome guest!");
}
catch (err) {
    document.getElementById("demo").innerHTML = err.message;
}

//try and catch
function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo1").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "Input is " + err; //there is error as no srg is given for no. between 5 to 10

    }
    finally { //Block of code to be executed regardless of the try / catch result
        document.getElementById("demo").value = "";
    }
}
//range error
let num = 1;
try {
    num.toPrecision(500);
}
catch (err) {
    document.getElementById("demo3").innerHTML = err.name;
}

//syntax error
try {
    eval("alert('Hello)");// here a ' is missing
}
catch (err) {
    document.getElementById("demo4").innerHTML = err.name;
}

//Type Error
let n = 1;
try {
    n.toUpperCase();
}
catch (err) {
    document.getElementById("demo5").innerHTML = err.name;
}