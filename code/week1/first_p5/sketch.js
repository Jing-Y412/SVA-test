function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);

    btn = select('#my-button');
    btn.mouseClicked(onBtnClicked);
  }
  function onBtnClicked(){
    fill(random(255));
    
  }
  function draw() {
    background(220);
    circle(100,100,100);
    rect(100,100,100);
  }