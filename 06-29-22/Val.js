function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    }
}

//range overflow
function myFunction1() {
    let text;
    if (document.getElementById("id10").validity.rangeOverflow) {
        text = "Value too large";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo1").innerHTML = text;
}

//range Underflow

function myFunction2() {
    let text1;
    if (document.getElementById("id11").validity.rangeUnderflow) {
        text1 = "Value too small";
    } else {
        text1 = "Input OK";
    }
    document.getElementById("demo2").innerHTML = text1;
}