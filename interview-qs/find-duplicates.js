// Find duplicates from the array and assign them as key value pairs
// convert the keys into strings

//let a = [1, 2, 3, 4, 4, 3, 3, 4];

let a = [1, 2, 3, 4];

//Method 1
function findDuplicate(arr) {
  let output = {};
  for (i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (output[element] !== undefined) {
      return true;
    } else {
      output[element] = 1;
    }
  }
  return false;
}

console.log(findDuplicate(a));

let b = [2, 3, 3, 4, 4, 3, 3, 4];

//Method 2
function duplicate(arr) {
  let output = {};
  for (let value of arr) {
    if (!output[value]) {
      output[value] = 1;
    } else {
      output[value]++;
    }
  }
  return output;
}

let assignedDuplicates = duplicate(b);
console.log(assignedDuplicates);
