var cities = [];
var numCities = 5;

function setup() {
    createCanvas(800, 480);

    for (var i = 0; i < numCities; i++) {
        var x = random(0, width);
        var y = random(0, height);
        cities.push(new createVector(x, y));
    }
}

function draw() {
    background(0);
    
    stroke(255);
    strokeWeight(8);
    for (var i = 0; i < numCities; i++) {
        point(cities[i].x, cities[i].y);
    }
}