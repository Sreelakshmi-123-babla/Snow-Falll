class Snow1 {
  constructor() {
    var options = {
        'restitution':0,
        'friction':0,
        'density':0.005,
        'isStatic' : false
    }
    this.body = Bodies.rectangle(Math.round(random(10,600)), 10, 80,80, options);
    this.image = loadImage("snow4.webp");



    World.add(world, this.body);
  }
  updatepos(){
        

            Matter.Body.setPosition(this.body, {x:random(0,900), y:random(0,900)})

    }

  display(){
    ;
    var pos =this.body.position

    // var angle = this.body.angle;

    // translate(pos.x, pos.y);
    // rotate(angle);
    strokeWeight(4);
    stroke("green");
    fill(255);
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, 20, 20);
    // rectMode(CENTER)
    // rect(pos.x,pos.y,10,10)


  }
}