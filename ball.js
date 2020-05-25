class Ball {
    constructor (x,y,diameter,speedx,speedy){
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.speedx = speedx;
    this.speedy = speedy;
    }
  
    move () {
    //basic auto-movement
    this.x += this.speedx;
    this.y += this.speedy;
  
    //bouncing against the wall
    if (this.y >= alto - this.diameter) {
      this.speedy = -this.speedy;
    }
  
    if (this.y <= 0 + this.diameter) {
      this.speedy = -this.speedy;
    }

    if (this.x >= ancho - this.diameter) {
        this.speedx = -this.speedx;
        // puntuacion(playerOne)
      }
    
      if (this.x <= 0 + this.diameter) {
        this.speedx = -this.speedx;
        // puntuacion(playerTwo)
      }
  }
    
  
    display () {
      ellipseMode(CENTER);
      smooth();
      ellipse(this.x, this.y, this.diameter);
    }
  
    intersects(other) {
    let d = dist(this.x,this.y,other.x,other.y)
    if (d < this.diameter + other.diameter) {
    this.speedx = -this.speedx;
    }
    }
  }