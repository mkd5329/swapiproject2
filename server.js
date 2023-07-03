const express = require('express')
const app = express()
const port = 3000;
//app.use((req, res, next) => {
//  console.log('Time:', Date.now())
//  next()
//})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.get('/api/planets/', (req, res, next) => {
    res.send('planet data example');
  })

  