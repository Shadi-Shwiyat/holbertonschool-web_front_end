function createClassRoom (numbersOfStudents) {
    function studentSeat (seat) {
        return function () {
            return (seat);
        }
    }

    let students = [];
    let i = 0;
    
    while (i < numbersOfStudents) {
        students.push(studentSeat(i + 1));
        i++;
    }

    return (students);
}

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());