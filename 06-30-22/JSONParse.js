
const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;

//parsing a JSON Array
const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text);
document.getElementById("demo1").innerHTML = myArr[0];

//convert a string into a date object
const text1 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj1 = JSON.parse(text1, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }
});
document.getElementById("demo2").innerHTML = obj.name + ", " + obj.birth;

//converting a string into function
const text2 = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
const obj2 = JSON.parse(text2);
obj2.age = eval("(" + obj2.age + ")");
document.getElementById("demo3").innerHTML = obj2.name + ", " + obj2.age()
