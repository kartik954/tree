class Stone{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 1.0,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 80;
        this.image = loadImage("sprites/Pluckingmangoes/stone.png");
    }
    display(){
        var pos = this.body;
        var angle =this.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}