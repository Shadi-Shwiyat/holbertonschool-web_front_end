// Creating user object
let user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'Telaviv',
    occupation: 'Engineer'
}

// Function logs a welcome string for the user
function logWelcomeUser (welcomString) {
    console.log(`${welcomString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// Variable binds the user object to the welcome user function
let bindLogWelcomeUser = logWelcomeUser.bind(user);

// Calling the bound variable function passing in strings
bindLogWelcomeUser('Welcome');
bindLogWelcomeUser('Hello');