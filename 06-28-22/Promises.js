
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {// myresolve for success And myreject for error
    let x = 0;

    // some code (try to change x to 5)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(//takes two args 
    function (value) { myDisplayer(value); }, //callback for success
    function (error) { myDisplayer(error); } //callback for failures
);
