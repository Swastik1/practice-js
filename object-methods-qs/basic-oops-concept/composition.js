class Engine {
    start(){
        return 'Engine started';
    }
}

class Car {
    constructor(){
        this.engine = new Engine();
    }

    start(){
        return `Car started ${this.engine.start()}`
    }
}

const carInstance = new Car();
console.log(carInstance.start());