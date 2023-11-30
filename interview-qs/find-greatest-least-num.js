const numbers = [12, 5, 27, 8, 16, 3, 20];

function findGreatestLeast(element) {
    let greatestNumber = element[0];
    let leastNumber = element[0];

    element.forEach((item) => {
        if (item > greatestNumber) {
            greatestNumber = item;
        }

        if (item < leastNumber) {
            leastNumber = item;
        }
        
        })
    
    return { greatestNumber, leastNumber };

}

const { greatestNumber, leastNumber } = findGreatestLeast(numbers);
console.log('greatest: ', greatestNumber);
console.log('greatest: ', leastNumber);