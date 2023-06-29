// module.exports = {    
//     "type":"mysql",
//     "url":process.env.DATABASE_URL,
//     //"extra": {"ssl": { "rejectUnauthorized": false }},
//     "migrations":[
//         "./src/database/migrations/*.ts"
//     ],
//     "entities":[
//         "./src/models/*.ts"        
//     ],
//     "cli":{
//         "migrationsDir":"./src/database/migrations"
//     }
// }

module.exports = {    
    "type":"mysql",
    "url":process.env.DATABASE_URL,
    //"extra": {"ssl": { "rejectUnauthorized": false }},
    "migrations":[
        "./dist/database/migrations/*.js"
    ],
    "entities":[
        "./dist/models/*.js"        
    ],
    "cli":{
        "migrationsDir":"./dist/database/migrations"
    }
}