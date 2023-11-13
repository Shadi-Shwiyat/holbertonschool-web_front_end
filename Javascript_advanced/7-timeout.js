// First line to print
console.log('Start of the execution queue');

// Set timeout does a function after a set time in ms,
// in this case the log statement is pushed to the end of the event queue
setTimeout(function () {
    console.log('Final code block to be executed');
    }, 0);

// Looping function
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Statement printed after loop
console.log('End of the loop printing');