// Implement a function that rotates the elements of an array to the right by a given number of steps.

const originalArray = [1, 2, 3, 4, 5];

// Logic --
// move the elements by 2 steps 
// can use splice method

// Method1

function rotateElement(arr){
    const steps = 2;
    for (i=0; i<steps; i++){
        const lastElement = arr.pop();
        arr.splice(0,0,lastElement);
    }
    return arr
}

console.log(rotateElement(originalArray));

// Method2
const newArray = [5,6,7,8,9]
function rotateItem(arr){
    const steps = 2;
    for (i=0; i<steps; i++){
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr
}

console.log(rotateItem(newArray));