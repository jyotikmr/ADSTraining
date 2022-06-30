
const obj = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;

// Storing data:
const myObj = { name: "Jyoti", age: 23, city: "Hisar" };
const myJSON1 = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON1);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj1 = JSON.parse(text);
document.getElementById("demo1").innerHTML = obj1.name;

//converting the date objects into string
const obj2 = { name: "Jyoti", today: new Date(), city: "Hisar" };
const myJSON2 = JSON.stringify(obj2);
document.getElementById("demo2").innerHTML = myJSON2;

//strigify will remove any functions from the object
const obj3 = { name: "Jammu", age: function () { return 23; }, city: "Kashmir" };
const myJSON3 = JSON.stringify(obj3);
document.getElementById("demo3").innerHTML = myJSON3;