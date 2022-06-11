//sorting alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.sort();
document.getElementById("demo2").innerHTML = fruits;


//sorting the arrray descending order
// Create and display an array:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("d1").innerHTML = fruits1;

// First sort the array
fruits1.sort();

// Then reverse it:
fruits1.reverse();

document.getElementById("d2").innerHTML = fruits1;

//numeric arrayascending order sort
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("m1").innerHTML = points;  

points.sort(function(a, b){return a - b});
document.getElementById("m2").innerHTML = points;
