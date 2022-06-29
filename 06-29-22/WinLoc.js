document.getElementById("demo").innerHTML =
    "The full URL of this page is:<br>" + window.location.href;

//returns the name of internet host
document.getElementById("demo1").innerHTML =
    "Page hostname is: " + window.location.hostname;

//returns pathname of current page
document.getElementById("demo2").innerHTML =
    "Page path is " + window.location.pathname;

//returns the web protocol of the page
document.getElementById("demo3").innerHTML =
    "Page protocol is " + window.location.protocol;

//returns the number of the internet host port
document.getElementById("demo4").innerHTML =
    "Port number is " + window.location.port;
