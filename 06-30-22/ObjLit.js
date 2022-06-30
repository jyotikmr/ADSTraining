
//creating a javascript object by JSON parsing
const myJSON = '{"name":"Jyoti", "age":23, "car":null}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;

//Accessing the object values
const myJSON1 = '{"name":"Jammu", "age":50, "Bike":null}';
const myObj1 = JSON.parse(myJSON1);
document.getElementById("demo1").innerHTML = myObj1.name;

//Looping the object properties using the for-in loop
const myJSON2 = '{"name":"Aisha", "age":35, "car":null}';
const myObj2 = JSON.parse(myJSON2);

let text = "";
for (const x in myObj2) {
    text += myObj2[x] + ", ";
}
document.getElementById("demo2").innerHTML = text;