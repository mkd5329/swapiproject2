const mongodb = require("mongodb"); // mongo client library
const url = "mongodb://localhost:27017/bookdb"; // change to api or planets
let dbPool; // database connection

mongodb.MongoClient.connect(url, function(err, db){
    if(err === null){
        dbPool = db;
    }else{
        console.log("DB CONNECTION FAILED. Is database running?");
    }
});

//retrieve all planents
module.exports.findAllPlanets = function( callback){
    data = 'fresponse from findAllPLants';
    let  col = dbPool.collection("planets");
    col.find().toArray((err, planets)=> {
        if(err ===null){
            callback(null, planets);
        }else{
            callback("failed to find planets", undefined)
        }
    });
};

//retrieve a single planents\
module.exports.findPlanet = function( callback){
    data = 'fresponse from findAllPLants';
    let  col = dbPool.collection("planets");
    col.find({planet: planet}).toArray((err, planet)=> {
        if(err ===null){
            callback(null, planet);
        }else{
            callback("failed to find planets", undefined)
        }
    });
};



