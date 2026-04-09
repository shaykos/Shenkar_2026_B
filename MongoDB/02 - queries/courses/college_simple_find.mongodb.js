//עובר למסד הנתונים
use('collegeDB');

db.courses.find({}, { _id: false, semester: false }).limit(2);

db.courses.find({}, { name: true }).limit(3);