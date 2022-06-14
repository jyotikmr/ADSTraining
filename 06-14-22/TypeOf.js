
document.getElementById("demo").innerHTML =
    typeof "john" + "<br>" +// Returns "string"
    typeof 3.14 + "<br>" +// Returns "number"
    typeof NaN + "<br>" +
    typeof false + "<br>" +// Returns "boolean"
    typeof [1, 2, 3, 4] + "<br>" +// Returns "object" (not "array", see note below)
    typeof { name: 'john', age: 34 } + "<br>" +// Returns "object"
    typeof new Date() + "<br>" +
    typeof function () { } + "<br>" +// Returns "function"
    typeof myCar + "<br>" +
    typeof null;// Returns "object"

//constructor Property
document.getElementById("demo1").innerHTML =
    "john".constructor + "<br>" +
    (3.14).constructor + "<br>" +
    false.constructor + "<br>" +
    [1, 2, 3, 4].constructor + "<br>" +
    { name: 'john', age: 34 }.constructor + "<br>" +
    new Date().constructor + "<br>" +
    function () { }.constructor;

// isArray
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2").innerHTML = isArray(fruits);

function isArray(myArray) {
    return myArray.constructor === Array;
}

const myDate = new Date();
document.getElementById("demo3").innerHTML = isDate(myDate);

function isDate(myDate) {
    return myDate.constructor === Date;
}

let y = "5";
let x = + y;
document.getElementById("demo4").innerHTML = typeof y + "<br>" + typeof x;

//to string
let xa = 123;
document.getElementById("d1").innerHTML =
    x.toString() + "<br>" +
    (123).toString() + "<br>" +
    (100 + 23).toString();