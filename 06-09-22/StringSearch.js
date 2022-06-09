
let str = "To the well-organized mind, death is but the next great adventure.";
document.getElementById("demo").innerHTML = str.indexOf("mind");


// last indexof returns position of last occurance of a specified text

let str1 = "You're a little scary sometimes, you know that? Brilliant... but scary.";
document.getElementById("demo1").innerHTML = str1.lastIndexOf("scary");

// search method returns the position of 1st occurrence
let str2 = "Ah, music. A magic beyond all we do here";
document.getElementById("demo2").innerHTML = str2.search("magic");

// search a string for a particular part
let text = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";
document.getElementById("demo3").innerHTML = text.match(/pe/g);

//search that string includes a specific word
let text1 = "Fawkes is a phoenix, Harry. Phoenixes burst into flame when it is time for them to die and are reborn from the ashes";
document.getElementById("demo4").innerHTML = text1.includes("Phoenixes");

// lets see if a string starts with a specific word
let text2 = "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.";
document.getElementById("demo5").innerHTML = text2.startsWith("Happiness");

//lets see if the string end with a speciic word
let text3 = "Twitchy little ferret, aren’t you, Malfoy?";
document.getElementById("demo6").innerHTML = text3.endsWith("Malfoy?");