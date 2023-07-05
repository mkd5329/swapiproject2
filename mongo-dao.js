const { MongoClient } = require("mongodb"); // mongo client library
const url = "mongodb://localhost:27017/swapi"; // change to api or planets
let dbPool; // database connection


async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db("swapi");
    dbPool= db;
    console.log("done with conn");
}
startup();

console.log("continue");

//retrieve all planents
module.exports.findAllPlanets = function( callback){
    //console.log(dbPool.collection("planets"));
    console.log("first");
    data = 'response from findAllPLants';
    let col = dbPool.collection("planets");
    console.log("second");
    let dPromise = col.find().toArray();
    console.log("third");
    dPromise.then((planets)=> {
        console.log("all good");
        callback(null, planets);
    }
    );
    console.log("fourth");

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



