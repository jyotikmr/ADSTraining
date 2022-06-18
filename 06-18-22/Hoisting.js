
/* x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;           // Display x in the element

var x; // Declare x
this is how i would have written the code
 
now the default hoisting behaviour of javascript will move all the declarations to the top*/

var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;           // Display x in the element