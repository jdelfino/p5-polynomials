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

  // This line creates a "loop"
  // The code inside the { } brackets will run repeatedly, with a
  // different value of x each time.
  // The loop starts at x = -250. Each time the loop runs, x increases
  // by 10. The loop stops when x gets to 250.
  for (var x = -250; x < 250; x += 10) {

    // This line draws a circle at point (x, f(x)), with diameter 5.
    circle(x, f(x), 5);
  }
}
