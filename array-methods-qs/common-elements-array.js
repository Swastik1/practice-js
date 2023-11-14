// Write a function that takes two arrays as arguments and returns a new array containing elements that are common to both arrays.

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// Method 1
function commonElement(a,b){
    let array3 = []
    for (i = 0; i<a.length; i++){
        let element = a[i];
        
        for (j=0; j<b.length; j++){
            let key = b[j];

            if (element === key){
                array3.push(element);
                break;
            }
        }
    }

    return array3;
    
}

console.log('resolved using for loop --',commonElement(array1,array2));

// Method 2

const commonArray = array1.filter(arr => array2.includes(arr));
console.log('resolved using filter and includes method --',commonArray);