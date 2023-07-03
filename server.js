const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.get('/api/planets/', (req, res, next) => {
    res.send('planet data example');
  })