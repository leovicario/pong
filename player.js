class Player {
    constructor (x,y,size,height,speedx, speedy) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.height = height;
      this.speedx = speedx;
      this.speedy = speedy;
      this.diameter = size-20;
      this.puntuacion = 0;
    }


    move() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;

    if (keyIsDown(UP_ARROW)) {
      playerOne.speedy = 0;
      playerOne.speedy -= 7;
    }


    if (keyIsDown(DOWN_ARROW)){
      playerOne.speedy = 0;
      playerOne.speedy += 7 ;
    }

    if (!keyIsDown(DOWN_ARROW) && !keyIsDown(UP_ARROW)) {
      playerOne.speedy *= 0.9;
    }

      if (this.y > alto - this.height/2){
      playerOne.speedy = 0;
      }

      if (this.y < 0 + this.height/2){
      playerOne.speedy = 0;
      }
  }

    display() {
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.height);
  }
  }
