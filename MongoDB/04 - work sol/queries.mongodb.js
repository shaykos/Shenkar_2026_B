//הצגת כל הסטודנטים הפעילים
use('college_hw_db')
db.students.find({ isActive: true });
//db.students.find({ isActive: true }).count();

//הצגת הסטודנטים שקיבלו בין 85 ל-95
use('college_hw_db')
db.students.find({ grade: { $gt: 85, $lt: 95 } });

//הצגת כל הסטודנטים שלומדים מתמטיקה או אומנות
use('college_hw_db')
db.students.find({ courses: { $in: ["Math", "Art"] } });

//הצגת כל הסטודנטים שלומדים גם מדעי המחשב וגם פיזיקה
use('college_hw_db')
db.students.find({ courses: { $all: ["Physics", "Computer Science"] } });

// הצגת כל הסטודנטים שלא פעילים או שקיבלו מתחת ל-55
use('college_hw_db')
db.students.find({
    $or: [
        { grade: { $lt: 55 } },
        { isActive: false }
    ]
});

//הצגת שמות הסטודנטים ומערך הקורסים של אלו שלומדים ביולוגיה
use('college_hw_db')
db.students.find({ courses: "Biology" }, { _id: 0, name: 1, courses: 1 });

// הצגת 5 הסטודנטים הפעילים הטובים ביותר
use('college_hw_db')
db.students.find({ isActive: true }).limit(5).sort({ grade: -1 });

// דימוי הצגת הנתונים של העמוד השלישי ממויין לפי ציון בסדר יורד
use('college_hw_db')
db.students.find({}).sort({ grade: -1 }).limit(60).skip(40);

