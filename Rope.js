class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 6,
            length: 250
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.ball = null;
        this.rope.ball2 = null;
        this.rope.ball3 = null;
        this.rope.ball4 = null;
        this.rope.ball5 = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke("red")
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
    
}