// Shift the zeroes to the right side of the array 

let a = [5,0,1,0,-3,0,4,6];

// Logic
// assign different arrays to non zero elements and zero elements
// check if its 0 
// then shift these 0 to the right side using concat

// Method 1
const nonZeroElements = a.filter((item) => item !== 0);
console.log(nonZeroElements);
const zeroElements = a.filter((item) => item === 0);
console.log(zeroElements);
const shiftArr = nonZeroElements.concat(zeroElements)
console.log(shiftArr);

// Method 2
let notZero = [];
let zero = [];

for ( i = 0; i < a.length; i++){
    if (a[i] !== 0){
        notZero.push(a[i]);
    }  else {
        zero.push(a[i]);
    }
}

const shift = notZero.concat(zero);

console.log(notZero);
console.log(zero);
console.log(shift);

// Method 3 

let nonZero = a.filter((item) => item !== 0);
let zeroItem = a.filter((item) => item === 0);
let mergeArr = [...nonZero, ...zeroItem];
console.log(mergeArr);