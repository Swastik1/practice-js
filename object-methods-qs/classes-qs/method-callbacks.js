// Create a class ArrayProcessor with a method process that takes an array and a callback function. 
//The method should apply the callback to each element of the array.


class ArrayProcessor {

    process(array,callback){
        return array.map(callback)
    }
}

const result = new ArrayProcessor();
console.log(result.process([1,2,3], (num) => num * 2));
