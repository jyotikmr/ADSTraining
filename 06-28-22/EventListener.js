
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    alert("Hello World! my Name is Jyoti .");
}

//event listener for a event propagation ie bubbling and capturing

document.getElementById("myP1").addEventListener("click", function () {
    alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, false);

document.getElementById("myP2").addEventListener("click", function () {
    alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, true);