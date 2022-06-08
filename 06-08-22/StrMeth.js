   //upper case
   function myFunction3() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.toUpperCase();
  }
   //concat
   let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
document.getElementById("demo1").innerHTML = text3;

let texta = "     Hello World!     ";
let textb = text1.trim();

document.getElementById("demo2").innerHTML =
"Length texta=" + texta.length + "<br>Length2 textb=" + textb.length;