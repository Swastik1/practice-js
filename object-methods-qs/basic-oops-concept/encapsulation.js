class EncapsulationExample {
    constructor() {
        this._privateVariable = 0;
    }

    get privateVariable() {
        return this._privateVariable;
    }

    set privateVariable(value) {
        if (value > 0) {
            this._privateVariable = value;
        }
    }
}

// Example Usage:
const obj = new EncapsulationExample();
obj.privateVariable = 42;
console.log(obj.privateVariable);
