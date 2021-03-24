class SlingShot{
    constructor(localBodyA, pointB){
        var options={
            bodyA:localBodyA,
            pointB:pointB,
            stiffness: 0.03,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.pointB=pointB;
    }
    
    display(){
        if(this.sling.bodyA){

        var pointA=this.sling.bodyA.position
        var pointB=this.pointB;

        strokeWeight(5);
        stroke("brown")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
  }
}