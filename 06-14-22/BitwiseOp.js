
document.getElementById("demo").innerHTML = 5 & 1;

//bitwise OR
document.getElementById("demo1").innerHTML = 5 | 1;

//bitwise NOT
document.getElementById("demo2").innerHTML = ~5;

//Bitwise Left
document.getElementById("demo3").innerHTML = 5 << 1;

//Converting Decimal to Binary
document.getElementById("demo4").innerHTML = dec2bin(-5);
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
