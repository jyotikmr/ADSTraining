//a fuction to set a cookie ie stores the name of visitor in the cookie variable
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//fuction that return the value of a specified cookie
function getCookie(cname) {// take cookie name as parameter
    let name = cname + "="; // create a variable to search for speacial character
    let decodedCookie = decodeURIComponent(document.cookie); //decode the cookie string 
    let ca = decodedCookie.split(';'); //split the cookie on ; into array called ca
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {//loop through a ca array
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// a fuction to check cookie
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}