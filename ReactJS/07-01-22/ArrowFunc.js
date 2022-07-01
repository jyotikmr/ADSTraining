//using function keyword

function printMyName(name) {
    document.getElementById("demo").innerHTML = name;

}

printMyName('max');

//using arrow keyword

let printMyname = (fname, lname) => document.getElementById("demo1").innerHTML = fname + " "+ lname;


printMyname("max", "sharma");

