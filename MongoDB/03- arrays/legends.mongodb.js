
use("legends");
db.createCollection("unicorns");
db.unicorns.insertMany([
    { name: "Aurora", gender: "m", weight: 750, vampires: ["Dracula", "Nosferatu"], loves: ["watermelon"] },
    { name: "Luna", gender: "f", weight: 600, loves: ["carrot"] },
    { name: "Zephyr", gender: "m", weight: 800, vampires: ["Vlad", "Lilith"], loves: ["apple", "banana", "chocolate"] },
    { name: "Blaze", gender: "m", weight: 650, loves: ["chocolate"] },
    { name: "Willow", gender: "f", weight: 450, loves: ["apple"] },
    { name: "Orion", gender: "m", weight: 710, loves: ["banana"] },
    { name: "Stella", gender: "f", weight: 400 },
    { name: "Nova", gender: "f", weight: 550, loves: ["apple"] },
    { name: "Iris", gender: "f", weight: 200, loves: ["apple", "watermelon"] }
]);

use("legends");
db.unicorns.find().count();

use("legends");
let query = {
    $or: [
        { loves: "chocolate" },
        { loves: "watermelon" },
        { weight: { $gte: 600 } }
    ]
};
db.unicorns.find(query).count();

use("legends");
let query2 = {
        gender: "f",
        $or: [{loves: "apple"}, {loves: "orange"}, {weight: { $lt: 500 }}]    
}
db.unicorns.find(query2).count();


// //א
// use("legends");
// db.unicorns.find({ gender: "m" });

// //ב
// use("legends");
// db.unicorns.find({ gender: "m", weight: { $gte: 700 } });

// //ג
// use("legends");
// db.unicorns.find({ vampires: { $exists: false } });

// //ד
// use("legends");
// db.unicorns.find({ gender: "f", loves: "apple" });

// //ה
// use("legends");
// db.unicorns.find({
//     $and: [
//         { gender: "f" },
//         {
//             $or: [
//                 { loves: "apple" },
//                 { weight: { $lt: 500 } }
//             ]
//         }
//     ]
// });

// //2ה
// use("legends");
// db.unicorns.find({
//     gender: "f",
//     $or: [
//         { loves: "apple" },
//         { weight: { $lt: 500 } }
//     ]
// });

// //
// use("legends");
// db.unicorns.find({ name: /r/ }, {_id: false});

// use("legends");
// db.unicorns.find({ name: /r/ }, {_id: false}).limit(2);

// use("legends");
// db.unicorns.find({ name: /r$/ }, {_id: false});

// use("legends");
// db.unicorns.find({ name: /^b/i }, {_id: false});