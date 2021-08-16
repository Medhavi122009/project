var ball
function setup() {
  createCanvas(400,400);
  var ball = createSprite (200,200,30,30)

}

function draw() 
{
  background(30);

  if (keyIsDown (RIGHT_ARROW)) {
    background("lightpink")
  }
   if (keyIsDown (LEFT_ARROW)) {
    background("yellow")
  }

   if (keyIsDown (UP_ARROW)) {
   background("lightblue")
  }
   if (keyIsDown (DOWN_ARROW)) {
   background("lightgreen")
    }



drawSprites()
}




