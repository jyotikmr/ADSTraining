//reference type Refresher
const person = {
    name: 'Jyoti'
};

const secondPerson = person;
person.name = 'max';

document.getElementById(demo).innerHTML = secondPerson;


//Now instead of creating some pointers we will create a copy using spread
const thirdPerson = {
    ...person
};

person.name = 'preeti';

document.getElementById("demo1").innerHTML = thirdPerson;
