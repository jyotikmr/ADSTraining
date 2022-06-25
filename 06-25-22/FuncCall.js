const myObject = {
    firstName: "Jyoti",
    lastName: "Kumari",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
document.getElementById("demo").innerHTML = myObject.fullName();

const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
document.getElementById("demo1").innerHTML = person.fullName.call(person1); 