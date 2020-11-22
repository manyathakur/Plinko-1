class plink{
    constructor(x,y){
       var ins = {
          isStatic:true,
          restitution:0.5
        }
        this.cir = Bodies.circle(x,y,10,ins);
        
        World.add(world,this.cir);
    
    }
    sell(){
        var pos = this.cir.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,10,10);
    }
}