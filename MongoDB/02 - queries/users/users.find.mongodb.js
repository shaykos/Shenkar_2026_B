use('collegeDB');

db.users.find();

db.users.find({ age: 19 });
/*
    select * 
    from users
    where age = 19
*/

db.users.find({ status: 'A' }, { _id: false });

db.users.find({ age: { $lte: 20 } });

db.users.find({ status: { $ne: 'A' } });

//כל היוזרים שגילם 19 והסטטוס שלהם הוא בהכרח A
// let q = { $and: [
//     {age: 19}, 
//     {status: 'A'}
// ] }
// db.users.find(q);

// כל היוזרים שגדולים מ-20 והסטטוס שלהם בהרכח A
// let q = { age: { $gt: 19 }, status: 'A' }
// db.users.find(q);

//רשימת כל היוזרים שלא רשמו סטטוס
db.users.find({ status: { $exists: false } });

/*
select * 
from users
where status is null
*/

//הפעלה של קשר של או
let q = {
    $or:[
      {age: {$gt:20}},
      {status: 'A'}  
    ]
}
db.users.find()