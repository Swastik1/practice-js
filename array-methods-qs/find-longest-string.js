//You have an array of strings. Write a function to find the longest string in the array.

const stringsArray = ["apple", "banana", "kiwi", "strawberry", "orange"];

//Method 1

function findLongarr(arr){
    let longestElement = null;
    for (let i=0; i < arr.length; i++){
        let element = arr[i];
        if(element.length > 6){
            longestElement = element;
        }
    }
    return longestElement;
}

console.log('solved using normal for loop ------',findLongarr(stringsArray));

//Method 2

function longWord(arr){
    let longestWord = null;
    for (num of arr){
        if(num.length > 6){
            longestWord = num;
        }
    }
    return longestWord;
}

console.log('solved using for of ------ ',longWord(stringsArray));


// Method 3

const filterWord = stringsArray.filter((word) => word.length > 6);
const wordLong = filterWord.reduce((item,acc) => item + acc,'');
console.log('solved using filter and reduce ------',wordLong);