// Function creates a paragraph element and adds some text to it
function createElement (data) {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = data;
    document.body.append(paragraph);
}

// Function performs a xml request and passes Json data to the callback function
function queryWikipedia (callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');

    xhr.responseType = 'json';

    xhr.send();

    // Check if request was successful
    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // if error returned
        } else { // Save the response data to a variable
            let jsonData = xhr.response;
            let extractedText = jsonData.query.pages[21721040].extract;

            // Calling the callback function
            callback(extractedText);
        }
    };

    // Handle error
    xhr.onerror = function() {
        alert("Request failed");
    };
}

// Call the query function and pass createElement as a parameter
queryWikipedia(createElement);