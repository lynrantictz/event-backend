const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.APP_PORT

app.get('/', (req, res) => {
  res.send('Welcome to event app!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})