function addBy (firstNumber) {
    return function (secondNumber) {
        return (secondNumber + firstNumber);
    }
}

function devideBy (firstNumber) {
    return function (secondNumber) {
        return (secondNumber / firstNumber);
    }
}

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);

let divideBy10 = devideBy(10);
let divideBy100 = devideBy(100);

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));