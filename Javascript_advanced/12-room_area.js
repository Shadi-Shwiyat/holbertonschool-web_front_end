// Dimensions object with get area function
let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return (this.width * this.length);
    }
};

// Using bind method to bind the room dimension object to the get area function, setting it to a variable
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Logging to ensure the get area function is bound and works
console.log(boundGetArea);
console.log(boundGetArea());