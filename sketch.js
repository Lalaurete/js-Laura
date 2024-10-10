function setup() {
  createCanvas(400, 400); 
  background("orange")
}

function draw() {
  stroke("green");
  fill("purple");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 15, 30); 
  }
}
