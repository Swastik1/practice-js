//Given an array of objects with 'name' and 'age' properties, write a function to sort the array in ascending order based on age.

const peopleArray = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

  //Logic --
  // First access the age property inside the array
  // where you can iterate over the age properties
  // apply array.sort() in ascending order to get the output


 function sortArray(arr) {
    arr.sort((a,b) => a.age -b.age);
    return arr;
 }
 console.log(sortArray(peopleArray));

