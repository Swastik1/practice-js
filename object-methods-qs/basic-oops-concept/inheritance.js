class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log('Animal speaks');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Woof!');
    }
}

// Example Usage:
const dogInstance = new Dog('Buddy');
console.log(dogInstance.name);
dogInstance.speak();
