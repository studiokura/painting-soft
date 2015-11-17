var strokeC = 0;
var strokeW = 1;
var can;
var button, button2;
var xCanvas;
var yCanvas;
var noise, env2, analyzer;
var sSlider;
var sSize;

function setup() {


	xCanvas = windowWidth;
	yCanvas = windowHeight;
	can = createCanvas(xCanvas, yCanvas);


	colorMode(HSB, 100, 100, 100);
	// background(90);
	button = createButton('save');
	button.position(10 + (xCanvas / 20) * 10, 10 + xCanvas / 20);
	button.mousePressed(imgSave);
	button2 = createButton('clear');
	button2.position(10 + (xCanvas / 20) * 11, 10 + xCanvas / 20);
	button2.mousePressed(clear);

	sSlider = createSlider(1,50, 1);
	sSlider.position(10 + (xCanvas / 20) * 10, 0);
	fill(0);
	text("StrokeWeight",10 + (xCanvas / 20) * 12,20);

fill(0); 

beginShape(); 
vertex(1,1); 
vertex(5,2); 
vertex(6,8); 
vertex(1,8); 
vertex(1,1); 
endShape(); 

}

function draw() {
 sSize = sSlider.value();
	for (var i = 0; i < 10; i += 1) {
		pButton(3 + xCanvas / 20 * i, 0, xCanvas / 20, color(i * 10, 100, 100), color(i * 10, 100, 80));
		pButton(3 + xCanvas / 20 * i, xCanvas / 20, xCanvas / 20, color(0, 0, i * 10), color(i * 10, 10, 80));

	}
	if (mouseIsPressed) {
		stroke(strokeC);
		strokeWeight(sSize);
		if (mouseY > 2 * (xCanvas / 20)) {
			line(mouseX, mouseY, pmouseX, pmouseY);
		}

	}

}




function pButton(x, y, s, c, c2) {
	strokeWeight(1);
	stroke(0);
	fill(c);
	rect(x, y, s, s);
	if (mouseX > x && mouseX < x + s && mouseY > y && mouseY < y + s && mouseIsPressed) {
		strokeC = c;
		fill(c2);
		rect(x, y, s, s);
	}

}



function imgSave() {
	save(can, 'can.jpg');
}

function clear() {
	noStroke();
	fill(0, 0, 100);
	rect(0, 0, width, height);
}
