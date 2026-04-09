//יצירת מסד נתונים
use('collegeDB');

//יצירת אוסף 
db.createCollection('courses');

//מוסיפים מסמכים לאוסף
db.courses.insertMany([
    {
        name: "Introduction to Computer Science",
        code: "CS101",
        credits: 3,
        semester: 1
    },
    {
        name: "Web Development",
        code: "CS201",
        credits: 4,
        semester: 2
    },
    {
        name: "Database Design",
        code: "CS301",
        credits: 3,
        semester: 3
    },
    {
        name: "Advanced JavaScript",
        code: "CS202",
        credits: 3,
        semester: 2
    },
    {
        name: "Data Structures",
        code: "CS102",
        credits: 4,
        semester: 1
    }
])
