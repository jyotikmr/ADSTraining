class Car {
    constructor(brand) {
        this.carname = brand;
    }
    Present() {
        return 'i have a ' + this.carname;
    }
}

class model extends Car { //model class inherits all the methods from the car class
    constructor(brand, mod) {
        super(brand); //super class refers to the parent class
        this.model = mod;
    }
    show() {
        return this.Present() + 'it is a ' + this.model;
    }
}


let myCar = new Model("ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
