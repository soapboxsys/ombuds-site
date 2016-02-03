var ombuds = [];
var ob = 7;
var bitcos = [];
var bc = 10;
var counter = 0;
var pcounter = -1;

$(document).ready(function(){
	$('.fn-s-1').on('click', function(){
		loop();
	});
});

function setup() {
  var myCanvas = createCanvas(800, 125);
  myCanvas.parent('epiphyte');
  stroke(counter); 
  fill(counter);
  for(var i = 0; i<ob; i++){
		ombuds.push(new Slide());
  }
  for(var i = 0; i<bc; i++){
		bitcos.push(new Slide());
  } 
  frameRate(23);
  noLoop();
}


function draw() {
  background(253,3);
  fill(140);
  stroke(140);
  for(var i = 0; i< bc; i++){
  	bitcos[i].move();
		bitcos[i].display();
  }
  fill('#D6285E');
  stroke(140,0,0);
  for(var i = 0; i< ob; i++){
  	ombuds[i].move();
		ombuds[i].display();
  }
}


function Slide(){
	//initial position
	this.x = 0;
	this.y = 50;
	this.diameter = 2;
	//greatest possible distance to move in a frame
	counter++ 
	
	this.speed = counter/2;

	this.move = function() {
		this.x += random(-this.speed/3, this.speed/2);
		this.y += random(-this.speed/6, this.speed/6);
	};

	this.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
}


