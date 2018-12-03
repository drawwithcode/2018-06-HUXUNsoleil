var data;
var balls = [];
var myImage;
var controler = 1;

function preload() {
  myImage = loadImage('./assets/horrible-1.png');
  data = loadJSON('./assets/DevilNameinspace.json');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(data);
  for (var i = 0; i < data.DevilName.length; i++) {

    // properties
    var x = random(mouseX,windowWidth);
    var y = random(mouseY,windowHeight);
    var size = data.DevilName[i].careerdays;
    var name = data.DevilName[i].name;
    var title = data.DevilName[i].title;

    // create the ball object and add it to the array
    var myBall = new Ball(x, y, size, name, title);
    balls.push(myBall);
  }
}


function draw() {
  image(myImage, 0, 0, windowWidth, windowHeight);
  //background(210);
  for (var i = 0; i < 10; i++) {
    for (var a = 0; a < 100; a++) {

      var getx = random(0, width);
      var gety = random(0, height);
      var col = get(getx, gety);
      fill(col);
      noStroke();
      ellipse(getx, gety, 10);
    }
  }



		for (var j = 0; j < balls.length; j++) {
	    balls[j].move();
	    balls[j].display();
	  }



}

function Ball(_x, _y, _diameter, _name, _title) {
  // Properties defined by constructor
  this.size = map(_diameter, 10, 365, 5, 200);
  this.x = _x;
  this.y = _y;

  // Hardcoded properties
  this.speed = 2;
  this.yDir = 1;
  this.xDir = 1;

  // Methods
  this.move = function() {
    this.x += this.speed * this.xDir;
    this.y += this.speed * this.yDir;
    if (this.y >= height || this.y <= 0) {
      this.yDir *= -1;
    }
    if (this.x >= width || this.x <= 0) {
      this.xDir *= -1;
    }
  }
  this.display = function() {
    if (_title == 'devil') {
      textSize(24);
      fill('red');
    } else {
      fill('white');
      textSize(12);
    }

    ellipse(this.x, this.y, this.size);
    textAlign(CENTER);
    fill(0);
    text(_name, this.x, this.y);
  }
  this.size = map(_diameter, 0, 365, 5, 200);
}
