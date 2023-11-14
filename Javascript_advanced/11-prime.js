// Function counts amount of prime numbers 2 - 100
function countPrimeNumbers () {
    let counter = 0;

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;

        for (let divider = 2; divider < i; divider++) {
            if (i % divider == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime == true) {
            counter++;
        }
    }
    return (counter);
}

// Starting a timer
const startTime = performance.now();

// Executing some code 100 times and using set time out
for (let j = 0; j < 100; j++) {
    setTimeout(function () {
        countPrimeNumbers();
    }, 0);
}

// Stoping the timer
const stopTime = performance.now();

// Calculating runtime
const elapsedTime = stopTime - startTime;

// Logging the elapsed time
console.log(`Execution time of printing countPrimeNumbers was ${elapsedTime} milliseconds.`);