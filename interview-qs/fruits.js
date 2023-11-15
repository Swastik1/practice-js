// Find length of all fruits in the array
// Find even number fruits in the array
// Find the longest fruit

const fruits = ['Mango', 'Orange', 'Apple' , 'Mango','Watermelon'];

const lengthFruits = fruits.map(item => item.length);
console.log(lengthFruits);

const evenFruits = fruits.filter(item => item.length % 2 === 0);
console.log(evenFruits);


    let longest = "";
    for (let element of fruits){
        if (element.length > longest.length){
            longest = element;
        }
    }

console.log("Longest", [longest]);

