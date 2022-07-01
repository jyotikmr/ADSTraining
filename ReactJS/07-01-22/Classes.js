/* class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        document.getElementById("demo1").innerHTML = this.gender;
    }
} */

//now rewriting this in nextgen javascript
class Human {
    gender = 'male';
    printGender = () => { document.getElementById("demo1").innerHTML = this.gender; }

}


/*
 class Person extends Human {
    constructor() {
        //adding a super method
        super();
        this.name = 'max';
    }

    printMyName() {
        document.getElementById("demo").innerHTML = this.name;

    }
} */
//rewriting this code of class again in nextgen javascript

class Person extends Human {
    name = 'max';
    gender = 'female';

    printMyName = () => { document.getElementById("demo").innerHTML = this.name; }
}


const person = new Person();
person.printMyName();
person.printGender();