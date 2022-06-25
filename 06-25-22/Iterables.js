

// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            return { value: n, done: false };
        }
    };
}

// Create Iterable
const n = myNumbers();
n.next(); // 10
n.next(); // 20
n.next(); // 30

document.getElementById("demo").innerHTML = n.next().value;


//another iterable
// Create an Object
myNumb = {};

// Make it Iterable
myNumb[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true }
            return { value: n, done: done };
        }
    };
}

// Create an Iterator
let iterator = myNumb[Symbol.iterator]();

let text = ""
while (true) {
    const result = iterator.next();
    if (result.done) break;
    text += result.value + "<br>";
}

document.getElementById("demo1").innerHTML = text;