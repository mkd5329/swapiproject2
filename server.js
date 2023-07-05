const express = require('express')
const dao = require("./mongo-dao");
const app = express()
const port = 3000;
//app.use((req, res, next) => {
//  console.log('Time:', Date.now())
//  next()
//})

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


  app.get('/api/planets',(req, res,next ) =>{
    dao.findAllPlanets((errMessage, data) =>{ 
      res.send(data);

    })
  })

  app.get("/api/planets/:id", (req, res) =>{
    dao.findPlanet(req.params.id, (err, planet) =>{
      if(planet !== undefined){
        // we have planet
        console.log("index.js single planet: " + req.params.id);
        res.send(planet);
      }else{
        res.statusCode = 404;
        res.end();
      }
    });
  });

  app.get('/api/planets/:id/characters',(req, res,next ) =>{
    dao.findCharactersByPlanet(req.params.id,(errMessage, data) =>{ 
      res.send(data);
    })
  })

  app.get('/api/films/:id/characters',(req, res,next ) =>{
    dao.findCharactersByFilm(req.params.id,(errMessage, data) =>{ 
      console.log("dataaa");
      console.log(data);
      res.send(data);
    })
  })

  