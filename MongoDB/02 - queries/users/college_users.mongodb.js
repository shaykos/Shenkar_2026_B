use('collegeDB');

db.createCollection('users');

db.users.insertMany([
    { "name": "sue", "age": 19, "status": "P" },
    { "name": "pol", "age": 22, "status": "A" },
    { "name": "lulu", "age": 20 },
    { "name": "ben", "status": "A" },
    { "name": "dan", "age": 35 },
    { "name": "hila", "age": 23, "status": "A" },
    { "name": "hila", "age": 23, "status": "A" },
    { "name": "frank", "age": 19 },
    { "name": "pola", "status": "A" }
])

