var hello;

hello = () => {
    return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();

//arrow function this represents
var hello;

hello = () => {
    document.getElementById("demo1").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);