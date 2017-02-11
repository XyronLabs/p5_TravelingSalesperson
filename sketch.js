var cities = [];
var numCities = 5;

var bestPath;
var recordDistance;
var recordP;
var nCitiesP;

function setup() {
    createCanvas(800, 480);
    
    // Create initial citiess
    for (var i = 0; i < numCities; i++) {
        var x = random(0, width);
        var y = random(0, height);
        cities.push(new createVector(x, y));
    }

    bestPath = cities.slice();
    recordDistance = calculateDistance(cities);

    // Dont close th path shapes
    noFill();

    // Create text
    recordP = createP();
    nCitiesP = createP();

    // Stop loop button
    var stopB = createButton("Stop");
    stopB.mousePressed(function() { noLoop(); });
}

function draw() {
    background(0);
    
    // Change path
    var i = floor(random(cities.length));
    var j = floor(random(cities.length));
    swap(cities, i, j);

    // Calculate distance and check if is a new record
    var d = calculateDistance(cities);
    if (d < recordDistance) {
        recordDistance = d;
        bestPath = cities.slice();
    }

    // Draw current path
    stroke(100);
    strokeWeight(1);
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
    strokeWeight(10);
    for (var i = 0; i < numCities; i++) {
        point(cities[i].x, cities[i].y);
    }

    // Show info
    recordP.html("Record distance: " + recordDistance);
    nCitiesP.html("Number of cities: " + cities.length);
}

function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        var newCity = createVector(mouseX, mouseY);

        var l = cities.length - 1;
        recordDistance += dist(newCity.x, newCity.y, cities[l].x, cities[l].y);
        
        cities.push(newCity);
        bestPath.push(newCity);
    }
}

function calculateDistance(arr) {
    var sum = 0;
    for (i = 0; i < arr.length - 1; i++) {
        sum += dist(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y);
    }
    return sum;
}

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}