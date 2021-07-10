class Snow{


constructor(){


var options = {

'density': 0.9,

airFriction : 0.01




}


image = loadImage("snow4.webp")
this.body = Bodies.circle(200,100,20,options) 
World.add(world,this.body)

}


display(){

var pos = this.body.position

imageMode(CENTER)
image(image,pos.x,pos. y,50,50)



}


}