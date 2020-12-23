//-*- = + -5*-1 = 5 initially movingRect was moving to the top now when movingrect is touching fixed rect
//We will multiply the negitve velocity with a negitive number so velocity changes to a positive number
//positive velocity means movingRect will start moving downward

//-*+= *-initially fixedRect was moving to the down now when fixedRect is touching moving rect
//We will multiply the positive velocity with a negitive number so velocity changes to a negitive number
//negitive velocity means fixedRect will start upward downward

function bouncOff(object1, object2) {
  if (
    object1.x - object2.x < object2.width / 2 + object1.width / 2 &&
    object2.x - object1.x < object2.width / 2 + object1.width / 2
  ) {
    object1.velocityX = object1.velocityX * -1;
    object2.velocityX = object2.velocityX * -1;
  }
  if (
    object1.y - object2.y < object2.height / 2 + object1.height / 2 &&
    object2.y - object1Rect.y < object2.height / 2 + object1.height / 2
  ) {
    object1.velocityY = object1.velocityY * -1;
    object2.velocityY = object2.velocityY * -1;
  }
}
