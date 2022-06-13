
document.getElementById("demo").innerHTML = Math.random();

//math floor returns no. between 0 to 10
document.getElementById("demo1").innerHTML =
    Math.floor(Math.random() * 11);

// returns random no. from 1 to 10
document.getElementById("demo2").innerHTML =
    Math.floor(Math.random() * 10) + 1;

// click the button to return max and min random no. 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}