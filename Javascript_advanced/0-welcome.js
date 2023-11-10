function welcome (firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    
    function displayFullName (concatenatedName) {
        alert(`Welcome ${concatenatedName}!`)
    }
    displayFullName(fullName);
}
