class Paper{
    constructor(x,y,r){
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2,
            'isStatic':false
        }
      this.r = r;
      this.body = Bodies.circle(x,y,(this.r-20)/2,options);
      this.image=loadImage("paper.png");
      World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0,0,this.r,this.r);
        pop();
      }
}