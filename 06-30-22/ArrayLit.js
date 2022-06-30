//creating a javascript Array from a literal
const myJSON = '["Ford", "BMW", "Fiat"]';
const myArray = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myArray;

//accessing array values by index
document.getElementById("demo1").innerHTML = myArray[0];

//access array value inside a object
const star = '{"name":"Jyoti", "age":25, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(star);

document.getElementById("demo2").innerHTML = myObj.cars[1];

//Looping through an array
let text = "";
for (let i = 0; i < myObj.cars.length; i++) {
    text += myObj.cars[i] + ", ";
}

document.getElementById("demo3").innerHTML = text;

//sending the data to the server 
//window.location = "demo_json.php?x=" + myJSON;