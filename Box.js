class Box{
    constructor(){
        var rest = {
            restitution: 1
          }
        this.body=Bodies.rectangle(100,50,50,50,rest);
        World.add(myWorld,this.body);
        
    }
    
     display(){

        var pos = this.body.position;
         rectMode(CENTER);
         fill("red");
         rect(pos.x,pos.y,50,50);
     }  
    
}