const add = (function () { //add variable to invoke the function
    let counter = 0; // m=now it set the couter to 0 and return function expression
    return function () { counter += 1; return counter }
}
)

//now invoking the add function to teh button function
function myFunction() {
    document.getElementById("demo").innerHTML = add();
}


