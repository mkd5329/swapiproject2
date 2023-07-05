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

            if(i == characters.length-1){
                callback(null,charList);
            }
        }
        );
    }
    }
    );
};

module.exports.findFilmsByCharacter = function(characterId, callback){
    //console.log(dbPool.collection("planets"));
    let col = dbPool.collection("films_characters");
    
    let dPromise = col.find({"character_id" : +characterId}).toArray();
    // we now have a list of character ids
    let filmList = [];

    dPromise.then((films)=> {
       // callback(null, characters);
    
       for( let i = 0; i < films.length; i++){
        
        let element = films[i];
            
        col = dbPool.collection("films");

        let d2Promise = col.findOne({"id":+element.film_id});

        d2Promise.then( (foundCharacter) => {
            filmList.push(foundCharacter);

            if(i == films.length-1){
                callback(null,filmList);
            }
        }
        );
    }
    }
    );
}


module.exports.findFilmsByPlanet = function(planetId, callback){
    //console.log(dbPool.collection("planets"));
    let col = dbPool.collection("films_planets");
    
    let dPromise = col.find({"planet_id" : +planetId}).toArray();
    // we now have a list of character ids
    let filmList = [];

    dPromise.then((films)=> {
       // callback(null, characters);
    
       for( let i = 0; i < films.length; i++){
        
        let element = films[i];
            
        col = dbPool.collection("films");

        let d2Promise = col.findOne({"id":+element.film_id});

        d2Promise.then( (foundCharacter) => {
            filmList.push(foundCharacter);

            if(i == films.length-1){
                callback(null,filmList);
            }
        }
        );
    }
    }
    );
}

// /api/films/:id/planets
// films: id
// films_planets: film_id, planet_id
module.exports.findPlanetByFilm = function(filmsId, callback){
    // a list of planets ids
const planetList = []
    let col = dbPool.collection("films_planets");
    let dPromise = col.find({"film_id":  + filmsId})
    .toArray();
    dPromise.then((planets)=>{
        
        for(let i = 0; i< planets.length; i++){
            element = planets[i]
            col = dbPool.collection("planets");
            let d2Promise = col.findOne({"id":+ element.planet_id});
            
            d2Promise.then( (foundPlanet) => {
                planetList.push(foundPlanet);
                console.log(planetList.length);
    
                if(i == planets.length-1){
                    callback(null,planetList);
                }
            });
        
        }
    });}
