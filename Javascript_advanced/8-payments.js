// Logs to console payment amount
function processPayment (amount) {
    console.log(`Collecting payment of ${amount}`);
}

// Logs orderID and current processing status
function processOrder (orderId, amount) {
    console.log(`${orderId} is being processed`);
    processPayment(amount);
    console.log(`${orderId} has been fully processed`);
}

// Main function processes some fake orders
function main () {
    console.log('Processing orders');
    processOrder(12321, 10.99);
    processOrder(12322, 12.99);
    processOrder(12323, 15.0);
    console.log('All the orders have been processed')
}

main();