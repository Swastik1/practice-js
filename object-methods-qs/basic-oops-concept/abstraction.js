class Shape {
    constructor() {
        if(this.constructor === Shape) {
            throw new Error('Abstract classes cannot be instantiated!');
        }
    }

    area(){
        throw new Error('area() method must be applied')
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area(){
        return 3.14 * this.radius * this.radius;
    }
}

const circleInstance = new Circle(5);
console.log('area of the circle is -- ',circleInstance.area());