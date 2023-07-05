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
// module.exports.findPlanet = function( callback){
//     data = 'fresponse from findAllPLants';
//     let  col = dbPool.collection("planets");
//     let dPromise = col.find({id:id}).toArray();
//     dPromise.then((planets)=>{
//         callback(null,planets);
//     });
    //col.find({planet: planet}).toArray((err, planet)=> {
    //    if(err ===null){
     //       callback(null, planet);
     //   }else{
     //       callback("failed to find planets", undefined)
     //   }
   // });
//WS};
module.exports.findPlanet = function(planetId, callback){
    let col = dbPool.collection("planets");
    let dPromise = col.find({"id":  + planetId})
    .toArray();
    dPromise.then((planets)=>{
        callback(null, planets);
    });
};

//retrieve all characters
module.exports.findAllCharacters = function( callback){
    //console.log(dbPool.collection("planets"));
    data = 'response from findAllPLants';
    let col = dbPool.collection("character");
    let dPromise = col.find().toArray();
    dPromise.then((character)=> {
        callback(null, character);
    }
    );

};

module.exports.findCharacter = function(characterId, callback){
    let col = dbPool.collection("character");
    let dPromise = col.find({"id":  + characterId})
    .toArray();
    dPromise.then((character)=>{
        callback(null, character);
    });
};

module.exports.findAllFilms = function( callback){
    //console.log(dbPool.collection("planets"));
    data = 'response from findAllPLants';
    let col = dbPool.collection("films");
    let dPromise = col.find().toArray();
    dPromise.then((film)=> {
        callback(null, film);
    }
    );

};

module.exports.findFilm = function(filmId, callback){
    let col = dbPool.collection("films");
    let dPromise = col.find({"id":  + filmId})
    .toArray();
    dPromise.then((film)=>{
        callback(null, film);
    });
};



