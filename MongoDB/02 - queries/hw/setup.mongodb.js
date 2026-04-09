function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const availableCourses = ["Math", "Physics", "Computer Science", "Biology", "History", "Art"];

use('college_hw_db');

db.createCollection('students');

for (let i = 0; i < 200; i++) {
    let name = randomString(7);
    let grade = Math.floor(Math.random() * 100);
    let isActive = Math.floor(Math.random() * 100) > 50 ? true : false;
    let courses1 = availableCourses[Math.floor(Math.random() * availableCourses.length)];
    let courses2 = availableCourses[Math.floor(Math.random() * availableCourses.length)];

    db.students.insertOne({
        name, grade, isActive, courses: [courses1, courses2]
    })
}

db.students.find().limit(10);

db.students.find({ name: /^A/ });