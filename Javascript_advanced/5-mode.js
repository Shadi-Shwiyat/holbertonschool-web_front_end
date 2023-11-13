// Called when you want to change the CSS attributes of page
function changeMode (size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main () {
    // Mode variables
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Adding paragraph element to body (DOM)
    let paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.append(paragraph);

    // Adding buttons to body
    // Spooky button
    let spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.append(spookyButton);

    // Dark mode button
    let darkButton = document.createElement('button');
    darkButton.textContent = 'Dark mode';
    darkButton.addEventListener('click', darkMode);
    document.body.append(darkButton);

    // Scream mode button
    let screamButton = document.createElement('button');
    screamButton.textContent = 'Scream mode';
    screamButton.addEventListener('click', screamMode);
    document.body.append(screamButton);
}

main();