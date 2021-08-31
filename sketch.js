function draw ()
{text("Click on the boxes to get different colours.",100,150)
  var box = createSprite(100,100,50,50);
  var box1 = createSprite(200,100,50,50);
  var box2 = createSprite(300,100,50,50);
  var box3 = createSprite(100,225,50,50);
  var box4 = createSprite(200,225,50,50);
  var box5 = createSprite(300,225,50,50);
  var box6 = createSprite(100,335,50,50);
  var box7 = createSprite(200,335,50,50);
  var box8 = createSprite(300,335,50,50);
  
 
  if (mousePressedOver(box))
  {
    background("RED");
  }
  if (mousePressedOver(box1))
  {
    background("PINK");
  }
  if (mousePressedOver(box2))
  {
    background("BLUE");
  }
  if (mousePressedOver(box3))
  {
    background("GREEN");
  }
  if (mousePressedOver(box4))
  {
    background("PURPLE");
  }
  if (mousePressedOver(box5))
  {
    background("BLACK");
  }
  if (mousePressedOver(box6))
  {
    background("WHITE");
  }
  if (mousePressedOver(box7))
  {
    background("ORANGE");
  }
  if (mousePressedOver(box8))
  {
    background("VIOLET");
  }
  
drawSprites();
}