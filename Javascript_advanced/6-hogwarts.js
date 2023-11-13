function studentHogwarts () {
    // Initializing private variables
    let privateScore = 0;
    let name = null;

    // Changing the score private method
    function changeScoreBy (points) {
        privateScore += points;
    }

    // Returning the object of functions
    return {
        setName: function (newName) {
            name = newName;
        },
        rewardStudent: function () {
            changeScoreBy(1);
        },
        penalizeStudent: function () {
            changeScoreBy(-1);
        },
        getScore: function () {
            return (`${name}: ${privateScore}`);
        }
    }
}

// Harry instance of studentHogwarts
let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

// Draco instance of studentHogwarts
let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
