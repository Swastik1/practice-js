//Write a function to remove all falsy values from an array.

const arrayWithFalsyValues = [1, 0, false, "hello", "", null, undefined, NaN];

//Method 1

const removeFalsy = arrayWithFalsyValues.filter(arr => arr !== false);
console.log(removeFalsy);

//Method 2

function removeFalse(arr) {
    let newArr = []
    for (i=0; i<arr.length; i++){
        if (arr[i] !== false){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


console.log(removeFalse(arrayWithFalsyValues));