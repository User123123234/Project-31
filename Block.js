class Block{
    constructor(x,y,width,height){
    var options = {
   isStatic:false,
    
    }
    this.Visiblity = 255;
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
 
    }
    display(){

 if(this.body.speed < 5){
      var pos = this.body.position;
    rectMode(CENTER);
       fill("red");  
    rect(pos.x, pos.y, this.width, this.height);

}

else{
   World.remove(world, this.body);
   this.Visiblity = this.Visiblity - 200;
   tint(255,this.Visiblity);
  // console.log(this.Visiblity)
   
   if (this.Visiblity < 0 && this.Visiblity > -255){
        score++;
   
      }
   
   }
    }

}

