class Paper{
 constructor (x,y,radius) {
  this.image=loadImage("image/paper.png")
  var options={
  isStatic:false,
  restitution:0.3,
  friction:1,
  density:0.6,
  }
  this.body = Bodies.circle(x,y,radius,options);
  this.radius=radius;
  World.add(world,this.body);
 }
   display(){
    fill("pink");
    noStroke();
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    


   }
}