function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  async function myFunction() {return "Hello";} //async before a func makes the function return a promise
  
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );


  //waiting for a file
  async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "ADSTraining\05-26-22\section2.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    document.getElementById("demo1").innerHTML = await myPromise;
  }
  
  getFile();