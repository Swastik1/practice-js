//Implement method overloading in JavaScript. 
//Create a class MathOperations with methods add that can take either two or three parameters and returns the sum.


class MathOperations {
    add(a,b,c) {
        if (typeof c === 'undefined') {
            return a + b;
        } else {
            return a + b + c;
        }
    }
}


const math = new MathOperations();
console.log(math.add(2, 3));
console.log(math.add(2,3,5));