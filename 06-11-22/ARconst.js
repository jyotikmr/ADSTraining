
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; 
// originally Here cars[0] is "Saab"
{  
    const cars = ["Toyota", "Volvo", "BMW"]; 
    // Here cars[0] is "Toyota"
  }
  // Here cars[0] is "Saab"
  document.getElementById("demo1").innerHTML = cars[0];