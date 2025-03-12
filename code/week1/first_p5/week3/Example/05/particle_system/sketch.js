let particleSystem;
let img;

function preload (){
    img = loadImage ("assets/cc.png");
}

function setup() {
  createCanvas(750, 600);
  particleSystem = new ParticleSystem(img);

}

function draw(){
    background(0);
    particleSystem.loop();
    if (mousePressed){
        particleSystem.addParticles(mouseX,mouseY,2);
    }

}

function mousePressed(){
    particleSystem.addParticles(mouseX, mouseY, 10);
}

