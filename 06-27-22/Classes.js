class Car { // class acts like a template to put objects
    constructor(name, year, sales) { //it executes automatically when new object is created
        this.name = name; //initializing name property of class car
        this.year = year;
        this.sales = sales;
    }
    age(x) {
        return x - this.year;
    }
}
//making an object in class car
const myCar = new Car("Bmw", 2018, 52);
document.getElementById("demo").innerHTML = myCar.name + " " + myCar.year + " had sales of " + myCar.sales;


let date = new Date(); //created an object 
let year = date.getFullYear(); //get the local yeaar 

let myCar1 = new Car("ford", 2015, 67);
document.getElementById("demo2").innerHTML =
    "My car is " + myCar.age(year) + " years old.";