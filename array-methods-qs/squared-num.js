//Write a function that takes an array of numbers and returns a new array with each element squared.

const originalArray = [1, 2, 3, 4, 5];

// Method 1 --
function squared(arr){
    let squaredElements = []
    for (i=0; i<arr.length; i++ ){
        let result = arr[i] * arr[i];
        squaredElements.push(result);
    }
    return squaredElements;
}

console.log(squared(originalArray));

// Method 2 -- 

const squaredItems = originalArray.map((item) => item * item);
console.log(squaredItems);