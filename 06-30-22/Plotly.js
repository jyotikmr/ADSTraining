

var xArray = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yArray = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Define Data
var data = [{
    x: xArray,
    y: yArray,
    mode: "lines"
}];

// Define Layout
var layout = {
    xaxis: { range: [40, 160], title: "Square Meters" },
    yaxis: { range: [5, 16], title: "Price in Millions" },
    title: "House Prices vs. Size"
};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);


var exp1 = "x";
var exp2 = "1.5*x";
var exp3 = "1.5*x + 7";
// Generate values

var x1Values = [];
var x2Values = [];
var x3Values = [];
var y1Values = [];
var y2Values = [];
var y3Values = [];

for (var x = 0; x <= 10; x += 1) {
    x1Values.push(x);
    x2Values.push(x);
    x3Values.push(x);
    y1Values.push(eval(exp1));
    y2Values.push(eval(exp2));
    y3Values.push(eval(exp3));
}

// Define Data
var data = [
    { x: x1Values, y: y1Values, mode: "lines" },
    { x: x2Values, y: y2Values, mode: "lines" },
    { x: x3Values, y: y3Values, mode: "lines" }
];

//Define Layout
var layout = { title: "[y=" + exp1 + "]  [y=" + exp2 + "]  [y=" + exp3 + "]" };

// Display using Plotly
Plotly.newPlot("myPlot1", data, layout);


//a pie chart
var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];

var layout = { title: "World Wide Wine Production" };

var data = [{ labels: xArray, values: yArray, type: "pie" }];

Plotly.newPlot("myPlot2", data, layout);

//Plotting equations
var data = [{ x: xValues, y: yValues, mode: "markers" }];
var layout = { title: "y = " + exp };
Plotly.newPlot("myPlot3", data, layout);
