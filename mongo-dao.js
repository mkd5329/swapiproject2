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

module.exports.findCharactersByFilm = function(filmId, callback){
    //console.log(dbPool.collection("planets"));
    let col = dbPool.collection("films_characters");
    
    let dPromise = col.find({"film_id" : +filmId}).toArray();
    // we now have a list of character ids
    let charList = [];

    dPromise.then((characters)=> {
       // callback(null, characters);

       for( let i = 0; i < characters.length; i++){
        
        let element = characters[i];
            
        console.log(element);
        col = dbPool.collection("characters");

        let d2Promise = col.findOne({"id":+element.character_id});

        d2Promise.then( (foundCharacter) => {
            charList.push(foundCharacter);
            console.log(charList.length);

            if(i == characters.length-1){
                callback(null,charList);
            }
        }
        );
    }
    }
    );
};
