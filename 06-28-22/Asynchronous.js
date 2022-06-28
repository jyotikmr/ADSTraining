
setTimeout(function () { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}


setInterval(myFunction1, 1000); //fuction1 is passed as an argument here
//1000 is no.of milliseconds btw intervals so func be called every sec

function myFunction1() {// myfuction1 is used as a callback
    let d = new Date();
    document.getElementById("demo").innerHTML =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}