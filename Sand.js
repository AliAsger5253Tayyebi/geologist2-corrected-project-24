class Sand{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            friction:0.1,
            density:0.51
        }
        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("black");
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,10);
        pop();
    
    }
    
    }