let particle;
let gravity;
let isPressed = false;
function setup() {
  createCanvas(800, 400);
  
  gravity = createVector(0, 0.1)

}

function draw(){
    background(190);
    if (particle){
        if(!isPressed){
         particle.applyForce(gravity);
         particle.update();
        }else{
            line(mouseX,mouseY,particle.pos.x,particle.pos.y);
        }
        particle.display();
    }
   
}

function mousePresed(){
    isPressed = true;
    particle = new Particle(mouseX, mouseY, 15);
    particle.push(particle);
}

function mousereleased(){
 isPressed = false;;
 const mouse = createVector(mouseX,mouseY);
 const force = p5.vector.sub(particle.pos,mouse);
 force.div(10);
 particle.applyForce(force);
 particle.setActive(true);
}