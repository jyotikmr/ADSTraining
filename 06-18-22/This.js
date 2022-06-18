
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

document.getElementById("demo1").innerHTML = myFunction();

function myFunction() {
    return this;
}

// Create an object:
const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("demo2").innerHTML = person1.fullName();

const p1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const p2 = {
    firstName: "Jyoti",
    lastName: "Kumari",
}

let x = p1.fullName.call(p2);
document.getElementById("demo3").innerHTML = x;

const pe1 = {
    fName: "Jyoti",
    lName: "Kumari",
    fullN: function () {
        return this.fName + " " + this.lName;
    }
}

const member = {
    fName: "Hege",
    lName: "Nilsen",
}

let fullN = pe1.fullN.bind(member);

document.getElementById("d4").innerHTML = fullN();