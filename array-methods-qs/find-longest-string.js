//You have an array of strings. Write a function to find the longest string in the array.

const stringsArray = ["apple", "banana", "kiwi", "strawberry", "orange"];

//Method 1

function findLongarr(arr) {
  if (arr.length === 0) {
    return null;
  }

  let longestElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestElement.length) {
      longestElement = arr[i];
    }
  }

  return longestElement;
}

console.log("solved using normal for loop ------", findLongarr(stringsArray));

//Method 2

function longWord(arr) {
  let longestWord = arr[0];
  for (num of arr) {
    if (num.length > longestWord.length) {
      longestWord = num;
    }
  }
  return longestWord;
}

console.log("solved using for of ------ ", longWord(stringsArray));

// Method 3
const lengthsArray = stringsArray.map((word) => word.length);
const maxLength = Math.max(...lengthsArray);
const filterWord = stringsArray.filter((word) => word.length === maxLength);
const maxWord = filterWord.length > 0 ? filterWord[0] : null;
console.log("solved using filter method --- ", maxWord);
