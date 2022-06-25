const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  document.getElementById("demo").innerHTML = person.fullName.apply(person1);
   
//The apply() method accepts arguments in an array:
  const p1 = {
    fName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const p2 = {
    firstName:"Jyoti",
    lastName: "Kumari"
  }
  
  document.getElementById("demo1").innerHTML = p1.fName.apply(p2, ["Oslo", "Norway"]);