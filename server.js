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

app.get('/api/planets/', (req, res, next) => {
    res.send('planet data example');
  })

  app.get('/api/planets',(req, res,next ) =>{
    dao.findAllPlanets(function(data){
      res.send(data);
    })
  })

  app.get("/planets/:id", (req, res) =>{
    dao.findPlanet(req.params.id, (err, book) =>{
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

  