
$(document).ready(function () {
    var myElements = $("#id01");
    $("#demo").text("The text from the id01 paragraph is: " + myElements[0].innerHTML);
});

//finding the HTML elements by CSS Selectors
$(document).ready(function () {
    var myElements = $("p.intro");
    $("#demo2").text("The first paragraph with class='intro' is: " + myElements[1].innerHTML);
});


//set the text content
$(document).ready(function () {
    var myElement = $("#01");
    myElement.text("Hello Sweden!");
});
//get the text content
$(document).ready(function () {
    var myText = $("#02a").text();
    $("#demo3").text(myText);
});
//changing the style of  HTML element

$(document).ready(function () {
    $("#demo4").css("font-size", "35px");
});

$(document).ready(function () {
    $("#id02").remove();
});

//grtting parent node
$(document).ready(function () {
    $("#demo5").text($("#02b").parent().prop("nodeName"));
});

