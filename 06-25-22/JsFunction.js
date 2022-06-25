const x = function (a, b) {return a * b};
document.getElementById("demo").innerHTML = x(4, 3) * 2; //javascript functions can be used in expressions

(function () {// I will invoke myself
    document.getElementById("demo1").innerHTML = "Hello! I called myself";
  })();

  document.getElementById("demo2").innerHTML = myFunction.toString();