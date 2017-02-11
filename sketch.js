var cities = [];
var numCities = 5;

var bestPath;
var recordDistance;

function setup() {
    createCanvas(800, 480);
    
    // Create initial citiess
    for (var i = 0; i < numCities; i++) {
        var x = random(0, width);
        var y = random(0, height);
        cities.push(new createVector(x, y));
    }

    bestPath = cities.slice();
    recordDistance = 0;

    // Dont close th path shapes
    noFill();
}

function draw() {
    background(0);
    
    // Draw current path
    stroke(50);
    strokeWeight(2);
    beginShape();
    for (i = 0; i < cities.length; i++) {
        vertex(cities[i].x, cities[i].y);
    }
    endShape();

    // Draw best path
    stroke(0, 0, 200);
    strokeWeight(4);
    beginShape();
    for (i = 0; i < bestPath.length; i++) {
        vertex(bestPath[i].x, bestPath[i].y);
    }
    endShape();

    // Draw cities as points
    stroke(255);
    strokeWeight(8);
    for (var i = 0; i < numCities; i++) {
        point(cities[i].x, cities[i].y);
    }
}