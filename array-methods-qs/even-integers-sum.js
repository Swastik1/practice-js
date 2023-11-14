//Given an array of numbers, write a function to calculate the sum of all positive numbers in the array

const numbersArray = [3, -7, 5, -2, 8, -4];
const newArr = [2,3,4];

// Method 1
function evenSum(num){
    let sum = 0
    for(let i =0; i < num.length; i++){
        let element = num[i];
        if(element % 2 == 0){
             sum+= element;
        } 
    }
    return sum;
}

console.log(evenSum(numbersArray));
console.log(evenSum(newArr));

// Method 2 
function sumEven(...arr){
    let total = 0;
    for (let num of arr){
        if(num % 2 == 0){
            total+= num;
        }
    }
    return total;
}

console.log(sumEven(...[2,4,6,7,8]));

// Method 3

const anotherArr = [8,4,5,7];
let count = 0;
const evenTotal = anotherArr.filter((int) => int % 2 == 0);
const sumOfEven = evenTotal.reduce((num,acc) => acc + num, count);
console.log(sumOfEven);