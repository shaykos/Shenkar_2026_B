use("school");

// db.students.insertMany([
//     { _id: 1, semester: 1, grades: [70, 87, 90] },
//     { _id: 2, semester: 1, grades: [90, 88, 92] },
//     { _id: 3, semester: 1, grades: [85, 100, 90] },
//     { _id: 4, semester: 1, grades: [70, 77, 60] },
//     { _id: 5, semester: 2, grades: [90, 88, 92] },
//     { _id: 6, semester: 2, grades: [65, 70, 90] }
// ]);


let query = { semester: 1, grades: { $gte: 92 } };
let projection = { "grades.$": 1 }
db.students.find(query, projection);

db.students.find(query, projection).count();

use("school");
db.students.find().sort({semester: -1});


/*
    select count(*)
    from students
    where semester = 1 and grades >= 92
*/

