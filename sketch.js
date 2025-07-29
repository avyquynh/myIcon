let myName;
let myIcon;
let angle = 0;

function preload() {
  myName = loadImage("name.png");
  myIcon = loadImage("icon.png");
}

function setup() {
  createCanvas(512, 512);
  imageMode(CENTER);
}

function draw() {
  background(270);

  let x = width / 2.0;
  let y = height / 2.0;

  push();
  translate(x, y);
  rotate(radians(angle));
  image(myName, 0, 0);
  pop();

  image(myIcon, 256, 256);

  angle += 0.25;
}
