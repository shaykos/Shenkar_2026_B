use('college_hw_db');

function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function createCoursesArray() {
    const availableCourses = [
        "Math", "Physics", "Computer Science", "Biology", "History",
        "Art", "Literature", "Chemistry", "Philosophy", "Economics"
    ];

    let arr = new Array();
    let count = 0;

    while (count < 5) {
        let index = Math.floor(Math.random() * availableCourses.length);
        if (!arr.some(c => c == availableCourses[index])) {
            arr.push(availableCourses[index]);
            count++;
        }
    }

    return arr;
}

// for (let i = 0; i < 200; i++) {
//     let s = {
//         id_student: i,
//         name: randomString(5),
//         grade: Math.floor(Math.random() * 100),
//         isActive: Math.floor(Math.random() * 100) > 50 ? true : false,
//         courses: createCoursesArray()
//     }
//     db.students.insertOne(s);
// }


db.students.insertMany([
    {
        id_student: 201,
        name: randomString(5),
        isActive: Math.floor(Math.random() * 100) > 50 ? true : false,
        courses: createCoursesArray()
    },
    {
        id_student: 202,
        name: randomString(5),
        grade: Math.floor(Math.random() * 100),
        isActive: Math.floor(Math.random() * 100) > 50 ? true : false,
    }
]);

