
const myCollection = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = "The innerHTML of the second paragraph is: " + myCollection[1].innerHTML;


//changing the text of a html dom

function myFunction() {
    const myCollection2 = document.getElementsByTagName("p");
    for (let i = 0; i < myCollection2.length; i++) {
        myCollection2[i].style.color = "red";
    }
}