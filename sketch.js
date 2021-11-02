var boxyboy;
function setup() {
  createCanvas(800,800);
  boxyboy = createSprite(200,200,20,60);
}

function draw() 
{
  background("blue");
  drawSprites();
if (keyIsDown(RIGHT_ARROW)){
  boxyboy.x = boxyboy.x +10;
}
if (keyIsDown(LEFT_ARROW)){
  boxyboy.x = boxyboy.x -10;
}
if (keyIsDown(UP_ARROW)){
  boxyboy.y = boxyboy.y -10;
}
if (keyIsDown(DOWN_ARROW)){
  boxyboy.y = boxyboy.y +10;
}
}




