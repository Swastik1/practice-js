// Write a function to flatten a nested array.

const nestedArray = [1, [2, 3], [4, [5, 6]]];

function flattenArray(arr) {
    let flattenElements = [];

    for (let i = 0; i < arr.length; i++){
        let element = arr[i]
        if (!Array.isArray(element)) {
            flattenElements.push(element)
        } else {
            flattenElements = flattenElements.concat(flattenArray(element))
        }
    }
    return flattenElements;
}

console.log(flattenArray(nestedArray)); // Should print: [1, 2, 3, 4, 5, 6]

// Logic ----------------------------

// Input: [1, [2, 3], [4, [5, 6]]]

// 1. Initial Call:
//    - Process 1 (Base Case)
//    - Recursive Call for [2, 3]

//    flattenElements: [1]

// 2. Recursive Call for [2, 3]:
//    - Process 2 (Base Case)
//    - Process 3 (Base Case)
//    - Return [2, 3]

//    flattenElements: [1]

// 3. Continuing Initial Call:
//    - Process [2, 3] (Concatenate the result from the Recursive Call)
//    - Recursive Call for [4, [5, 6]]

//    flattenElements: [1, 2, 3]

// 4. Recursive Call for [4, [5, 6]]:
//    - Process 4 (Base Case)
//    - Recursive Call for [5, 6]

//    flattenElements: [1, 2, 3]

// 5. Recursive Call for [5, 6]:
//    - Process 5 (Base Case)
//    - Process 6 (Base Case)
//    - Return [5, 6]

//    flattenElements: [1, 2, 3]

// 6. Continuing Recursive Call for [4, [5, 6]]:
//    - Process [5, 6] (Concatenate the result from the second Recursive Call)
//    - Return [4, 5, 6]

//    flattenElements: [1, 2, 3, 4, 5, 6]

// 7. Continuing Initial Call:
//    - Process [4, 5, 6] (Concatenate the result from the Recursive Call)
//    - Return [1, 2, 3, 4, 5, 6]

//    flattenElements: [1, 2, 3, 4, 5, 6]
