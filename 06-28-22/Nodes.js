
//To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.


const para = document.createElement("p");//creates a new element p
const node = document.createTextNode("This is new.");//we create a text node 
para.appendChild(node);//append the text node to p
const element = document.getElementById("div1"); //finding the existing element 

const child = document.getElementById("p1");
element.insertBefore(para,child);
element.appendChild(para); //appeding the element to the existing one


//finding the element we want to remove and execute it by using remove() method

function myFunction() {
    document.getElementById("p1").remove();
    }