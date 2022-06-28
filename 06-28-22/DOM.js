
const element = document.getElementById("intro");//Find an element by element id

document.getElementById("demo").innerHTML =
    "The text from the intro paragraph is: " + element.innerHTML;

const element1 = document.getElementsByTagName("p");//Find elements by tag name

document.getElementById("demo1").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;

//html elements by class name
const x = document.getElementsByClassName("intro");
document.getElementById("demo2").innerHTML =
    'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;


//finding HTML elements by query selector
const x1 = document.querySelectorAll("p.intro1");
document.getElementById("demo3").innerHTML =
    'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

//finding html element using document.form
const x2 = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
}
document.getElementById("demo4").innerHTML = text;