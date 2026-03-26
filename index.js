const express = require('express')
const app = express()

app.get('/', (req, res) => {
 res.send('Hello World! CI/CD pipeline is working perfectly! 🎉')
})

module.exports = app