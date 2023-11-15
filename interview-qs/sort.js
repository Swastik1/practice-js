// sort arrays in ascending and descending order
let num = [102,-2,1];

function ascendingsort(arr){
    arr.sort((a,b) => a - b);
    return arr;
}

console.log(ascendingsort(num));

function descendingcendingsort(arr){
    arr.sort((a,b) => b - a);
    return arr;
}
console.log(descendingcendingsort(num));