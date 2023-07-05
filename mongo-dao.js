const { MongoClient } = require("mongodb"); // mongo client library
const url = "mongodb://localhost:27017/swapi"; // change to api or planets
let dbPool; // database connection


async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db("swapi");
    dbPool= db;
    
}
startup();


//retrieve all planents
module.exports.findAllPlanets = function( callback){
    //console.log(dbPool.collection("planets"));
    data = 'response from findAllPLants';
    let col = dbPool.collection("planets");
    let dPromise = col.find().toArray();
    dPromise.then((planets)=> {
        callback(null, planets);
    }
    );

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

//retrieve all planents
module.exports.findCharactersByPlanet = function(planetId, callback){
    //console.log(dbPool.collection("planets"));
    let col = dbPool.collection("characters");
    console.log(planetId);
    let dPromise = col.find({"homeworld" : +planetId}).toArray();
    dPromise.then((characters)=> {
        callback(null, characters);
    }
    );

};

module.exports.findCharactersByFilm = function(planetId, callback){
    //console.log(dbPool.collection("planets"));
    let col = dbPool.collection("films_characters");
    console.log(planetId);
    let dPromise = col.find({"homeworld" : +planetId}).toArray();
    dPromise.then((characters)=> {
        callback(null, characters);
    }
    );

};
