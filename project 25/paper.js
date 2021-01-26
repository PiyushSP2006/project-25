class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
    
        }
        
        this.body=Bodies.circle(25, 150,24, options);
        this.width=24;
        this.height=24;
        this.image=loadImage("paper.png");
        World.add(world , this.body);
        

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(225);
        circle(pos.x,pos.y,this.width);
    }
}