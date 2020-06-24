var gamerect1
var gamerect2

function setup() 
{
  createCanvas(800,400);
   gamerect1 = createSprite(400, 100, 50, 50);
   gamerect1.debug = true;
   gamerect1.velocityY= 3;
   
   gamerect2 = createSprite(400,300,20,50);
   gamerect2.debug = true;
   gamerect2.velocityY = -3;
}

function draw()
{
  background(0); 
  
  if(gamerect1.x - gamerect2.x < (gamerect1.width + gamerect2.width)/2 
  && gamerect2.x - gamerect1.x < (gamerect1.width + gamerect2.width)/2 )
  {
    gamerect1.velocityX = gamerect1.velocityX * (-1)
    gamerect2.velocityX = gamerect2.velocityX * (-1)
  }

  if(gamerect1.y - gamerect2.y < (gamerect1.height + gamerect2.height)/2 
  && gamerect2.y - gamerect1.y < (gamerect1.height + gamerect2.height)/2 )
  {
    gamerect1.velocityY = gamerect1.velocityY * (-1)
    gamerect2.velocityY = gamerect2.velocityY * (-1)
  }
  drawSprites();
}