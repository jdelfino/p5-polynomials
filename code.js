// This function is run once when the program starts, and does some
// setup.
function setup() {
  createCanvas(600, 600); //create the canvas with height & width 600
  background(20); //black background
  strokeWeight(0.1); //thin lines
}

var a, b, c, d, e;

function f(x) {
  // This line defines our function: ax^4 + bx^3 + cx^2 + dx + e
  return a * pow(x, 4) + b * pow(x, 3) + -c * pow(x, 2) + -d * x + e;
}

function draw() {
  // This line sets the middle of the canvas to be (0, 0).
  // Normally, in p5, (0, 0) is the top left corner.
  translate(width / 2, width / 2);
  
  // This line sets our "fill color" (the color used to fill in shapes)
  // to yellow.
  fill(color("yellow"));

  // These lines set up the constants used in our equation.
  a = 0.0000001;
  b = 0.00003;
  c = 0.004;
  d = 1;
  e = 0;
  
  // Each of these lines draws a circle at a point, with a radius.
  // circle(10, 20, 5) draws a circle at point (10, 20) with radius 5.
  circle(-200, f(-200), 5);
  circle(-180, f(-180), 5);
  circle(-160, f(-160), 5);
  circle(-140, f(-140), 5);
  circle(-120, f(-120), 5);
  circle(-100, f(-100), 5);
  circle(-80, f(-80), 5);
  circle(-60, f(-60), 5);
  circle(-40, f(-40), 5);
  circle(-20, f(-20), 5);
  circle(0, f(0), 5);
  circle(20, f(20), 5);
  circle(40, f(40), 5);
  circle(60, f(60), 5);
  circle(80, f(80), 5);
  circle(100, f(100), 5);
  circle(120, f(120), 5);
  circle(140, f(140), 5);
  circle(160, f(160), 5);
  circle(180, f(180), 5);
  circle(200, f(200), 5);  
}
