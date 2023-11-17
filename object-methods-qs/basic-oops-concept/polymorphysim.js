class Calculator {
    add(a,b){
        return a + b;
    }
}

class AdvanceCalculator extends Calculator {
    add(a,b,c) {
        c = c || 0;                     // if no c value is provided return 0
        return (a + b) + c;
    }
}

let calc = new AdvanceCalculator();
const result1 = calc.add(2,3);
const result2 = calc.add(2,3,5);
console.log('result1 is -- ', result1 + ' ' + 'result2 is -- ' , result2);

