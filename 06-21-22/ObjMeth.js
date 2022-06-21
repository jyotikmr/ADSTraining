
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML = person.fullName();

//if we do not use () with the method then it wont work

//making a costum method by making a function
person.name = function () {
    return this.firstName + " " + this.lastName;
};

document.getElementById("demo1").innerHTML =
    "My father is " + person.name();


//using build in methods like ToUpperCase() in objects
person.name1 = function() {
    return this.firstName + " " + this.lastName;
};

document.getElementById("d1").innerHTML =
    "My father is " + person.name1(); 