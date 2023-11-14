//Given an array of integers, implement a function to find and return the maximum product of any two integers in the array.

const integersArray = [2, 7, 4, 1, 9, 3];

// Logic ---
// Sort the intergersArray in descending order
// keep first two elements in the array
// findt their product

const arraySortDesc = (arr) => {
    arr.sort((a,b) => b - a);
    return arr.slice(0,2);
}

const newArr = arraySortDesc(integersArray);
console.log(newArr);


const maxProduct = newArr.reduce((element,count) =>element * count,1);
console.log(maxProduct);