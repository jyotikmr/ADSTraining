
let text = "Visit W3Schools!";
let n = text.search("W3Schools");
document.getElementById("demo").innerHTML = n;

function myFunction() {
    let text1 = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML =
        text1.replace("Microsoft", "W3Schools");
}

//Regular Expression
let text2 = document.getElementById("p01").innerHTML;
const pattern = /e/;
document.getElementById("demo2").innerHTML = pattern.test(text2);

//REgular Expressions for searching
let text3 = document.getElementById("p02").innerHTML;
const pattern3 = /e/;
document.getElementById("demo4").innerHTML = pattern3.test(text3);

const obj = /e/.exec("The best things in life are free!");
document.getElementById("demo5").innerHTML =
    "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;