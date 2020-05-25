let ancho = window.innerWidth*0.9;
let alto = window.innerHeight*0.9;

function preload() {
  song = loadSound('sounds/pin.wav');
  song1 = loadSound('sounds/pon.wav');

}

function playSound (sound) {
  sound.play(-5);
  let speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  sound.rate(speed);
  delay.process(sound, 0.12, .7, 2300);
  reverb.process(sound, 5, 20);
}

function setup() {
  delay = new p5.Delay();
   reverb = new p5.Reverb();
    preload();
    createCanvas(window.innerWidth*0.9,window.innerHeight*0.9)
    frameRate(60);
    background (30, 50, 100);

    playerOne = new Player(width/6,height/2, 20,150,0,0);
    playerTwo = new Player(ancho-(ancho/6),height/2,20,150,0,0);
    ball = new Ball(width/2, height/2, 20, 15, 10);
}

function draw() {
  background (255-mouseY + 55, 40, mouseY);
  stroke(255); strokeWeight (4);
  line(ancho/2,0,ancho/2, alto)

  //counter
  rectMode(CENTER)
  fill (255); textSize(alto/8)
  textAlign(LEFT)
  text(playerOne.puntuacion, width/3, height/3);
  textAlign(RIGHT)
  fill (255); textSize(alto/8)
  text(playerTwo.puntuacion, (width/3 + width/3), height/3);

  //players
  noStroke()
  fill (255,100, 90);
  playerOne.move();
  playerOne.display();
  playerTwo.display();

  //ball
  fill (random(255),random(255),random(255))
  ball.move();
  ball.display();
  puntuacion()
  bounceBall();
  AI();

}


function puntuacion (player) {
  if (ball.x >= ancho - ball.diameter) {
    playerOne.puntuacion++;
  }

  if (ball.x <= 0 + ball.diameter) {
    playerTwo.puntuacion++;
  }
  }

function bounceBall () {
  // for the player (you)
  if (ball.x < playerOne.x + playerOne.size/4 + ball.diameter
    && ball.x > playerOne.x - playerOne.size/4 - ball.diameter
    && ball.y > playerOne.y - playerOne.height/2
    && ball.y < playerOne.y + playerOne.height/2) {
      playSound(song)
      ball.speedx = -ball.speedx
      ball.speedy = (-ball.speedy + 3)/2
      if (ball.speedy < 5) ball.speedy += 5;}

  if (ball.y > playerOne.y - playerOne.height/2 - ball.diameter
    && ball.y < playerOne.y + playerOne.height/2 + ball.diameter
    && ball.x > playerOne.x - playerOne.size/2
    && ball.x < playerOne.x + playerOne.size/2) {
      ball.speedy = -random(ball.speedy)}



  // for the machine
  if (ball.x > playerTwo.x - playerTwo.size/4 - ball.diameter
    && ball.x < playerTwo.x + playerTwo.size/4 + ball.diameter
    && ball.y > playerTwo.y - playerTwo.height/2
    && ball.y < playerTwo.y + playerTwo.height/2) {
      playSound(song1)
      ball.speedx = -ball.speedx
  }

  if (ball.y > playerTwo.y - playerTwo.height/2 - ball.diameter
    && ball.y < playerTwo.y + playerTwo.height/2 + ball.diameter
    && ball.x > playerTwo.x - playerTwo.size/2
    && ball.x < playerTwo.x + playerTwo.size/2) {
    ball.speedy = -ball.speedy
    }

}

function AI () {
  let distance = dist(ball.y,ball.y,playerTwo.y,playerTwo.y)*0.7
  if (ball.x < ancho) {
  if (ball.y < alto/2)  playerTwo.y =  alto/2 - distance
  if (ball.y > alto/2)  playerTwo.y =  alto/2 + distance

  let distance2 = dist(ball.y,ball.y,playerOne.y,playerOne.y)*0.7
  if (ball.x < ancho) {
  if (ball.y < alto/2)  playerOne.y =  ball.y + distance2/2
  if (ball.y > alto/2)  playerOne.y =  ball.y - distance2/2
  }
  // playerTwo.y = playerTwo.y - dist(ball.x,ball.y, alto/2,playerTwo.y)/100
}

}
