const express = require('express')
const dao = require("./mongo-dao");
const app = express()
const port = 3007;
const cors = require('cors');
//app.use((req, res, next) => {
//  console.log('Time:', Date.now())
//  next()
//})

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


  app.get('/api/planets',(req, res,next ) =>{
    dao.findAllPlanets((errMessage, data) =>{ 
      res.send(data);

    })
  })

  app.get("/api/planets/:id", (req, res, next) =>{
    dao.findPlanet(req.params.id, (err, planet) =>{
       res.send(planet);
      
    })
  });

  app.get('/api/characters',(req, res,next ) =>{
    dao.findAllCharacters((errMessage, data) =>{ 
      res.send(data);

    })
  });

  app.get('/api/characters/:id', (req, res, next)=>{
    dao.findCharacter(req.params.id, (err, character) =>{
      res.send(character);
    })
  })

  app.get('/api/films',(req, res,next ) =>{
    dao.findAllFilms((errMessage, data) =>{ 
      res.send(data);

    })
  });

  app.get('/api/planets/:id/characters',(req, res,next ) =>{
    dao.findCharactersByPlanet(req.params.id,(errMessage, data) =>{ 
      res.send(data);
    })
  })

  app.get('/api/films/:id/characters',(req, res,next ) =>{
    dao.findCharactersByFilm(req.params.id,(errMessage, data) =>{ 
      res.send(data);
    })
  })
  app.get('/api/characters/:id/films',(req, res,next ) =>{
    dao.findFilmsByCharacter(req.params.id,(errMessage, data) =>{ 
      //console.log("returning data");
      res.send(data);
    })
  })

  app.get('/api/films/:id', (req, res, next)=>{
    dao.findCharacter(req.params.id, (err, film) =>{
      res.send(film);
    })
  })

  app.get('/api/films/:id/planets', (req, res, next)=>{
    dao.findPlanetByFilm(req.params.id, (err, film) =>{
      res.send(film);
    })
  })


  app.get('/api/planets/:id/films', (req, res, next)=>{
    dao.findFilmsByPlanet(req.params.id, (err, data) =>{
      res.send(data);
    })
  })

  