const person = {
    firstName: "Jyoti",
    lastName: "Kumari",
    fullName: function () {
        return this.firstName + " " + this.lastName;

    }
}


const member = {
    firstName: "meenakshi",
    lastName: "Kaushal",
}

let fullName = person.fullName.bind(member)
//this method will borrow full name method from person

document.getElementById("demo").innerHTML = fullName();