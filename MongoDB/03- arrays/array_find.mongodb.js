use('array_find');

// db.createCollection('inventory');
// db.inventory.insertMany([
//     { _id: 1, arr: [1, 2, 3, 4] },
//     { _id: 2, arr: [1, 3, 5, 7] },
//     { _id: 3, arr: [3, 5, 4, 7] }, 
//     { _id: 4, arr: [10, 13, 4, 7] }
// ]);

// מציג את כל המסמכים בקולקציה
db.inventory.find();

// להציג את כל המסמכים שהמערך שלהם מכיל את הערך 5
db.inventory.find({ arr: 5 });

db.inventory.find({ arr: { $in: [13] } });

// להציג את כל המסמכים שהמערך שלהם מכיל את הערך 5 או 13
db.inventory.find({ arr: { $in: [5, 13] } });

// להציג את כל המסמכים שהמערך שלהם מכיל גם את הערך 13 וגם את הערך 5
db.inventory.find({ arr: { $all: [5, 13] } });

// יש למצוא את כל המסמכים שבמערך שעבורם קיימים איברים גדולים מ-4 או קטנים מ-6
db.inventory.find({arr:{$elemMatch:{$gt:4, $lt:6}}})
