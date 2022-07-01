//declaring an array
const numbers = [1, 2, 3];

//now using spread operator to add old array values to new one
const newNumbers = [...numbers, 4, 5];

document.getElementById("demo").innerHTML = newNumbers;


// using spread for objects
const person = {
    name: 'max'
};

const newPerson = {
    ...person,
    age: 25
}

document.getElementById("demo1").innerHTML = newPerson;

//using rest operator
const filter = (...args) => {
    return args.filter(el => el === 1);
}

document.getElementById("demo2").innerHTML = filter;


