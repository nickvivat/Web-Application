function getCurrentDateTime() {
    var now = new Date();
    return now.toString();
  }

var colors = ['white', 'blue', 'black'];
var colorIndex = 0

function colorChanger() {
    var color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    return color;
}

var backgroundColors = ['blue', 'lightgreen', 'yellow', 'red', 'pink', 'violet'];
var backgroundIndex = 0

function backgroundChanger() {
    var background = backgroundColors[backgroundIndex];
    backgroundIndex = (backgroundIndex + 1) % backgroundColors.length;
    return background;
}

setInterval(function() {
    var dateTime = getCurrentDateTime();
    var color = colorChanger();
    var background = backgroundChanger();
    postMessage({dateTime: dateTime, color: color, background: background});
}, 1000);