// Implement a static method generateRandom in a class RandomGenerator that generates a random number between a given range.

class RandomGenerator {

   static generateRandom(min,max){
        min = Math.ceil(min);
        max = Math.floor(max)
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}


const result = RandomGenerator.generateRandom(7,4);
console.log(result);