// Given a matrix (2D array) of integers, write a function to find the sum of all elements in the matrix.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
// method 1

const sumMatrix = matrix.map((element) => {
    let count = 0;
    for (let key of element){
        count += key
    }
    return count;
})

console.log(sumMatrix);

const total = sumMatrix.reduce((sum,acc) => sum + acc,0);
console.log([total]);

// method 2 

const totalMatrix = matrix.map((item) => item.reduce((sum,acc) => sum + acc,0));
console.log(totalMatrix);  // [ 6, 15, 24 ]

const sum = totalMatrix.reduce((total,acc) => total + acc, 0);
console.log('sum is -- ',[sum]);


// method 3

const sumOfMatrix = matrix.reduce((insideRow,finalRow) => insideRow + finalRow.reduce((element,count) => element + count, 0),0);
console.log('sum using reduce method --',[sumOfMatrix]);