const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! My CI/CD pipeline works! 🚀')
})

module.exports = app