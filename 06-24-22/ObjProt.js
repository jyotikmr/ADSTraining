
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("demo").innerHTML =
"The nationality of my father is " + myFather.nationality; 


//adding a new property usig prototype in function
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName
  };

  document.getElementById("demo1").innerHTML =
"My father is " + myFather.name(); 