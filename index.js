const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Node App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #0d1117;
            color: white;
          }
          .card {
            text-align: center;
            padding: 40px;
            border: 1px solid #30363d;
            border-radius: 12px;
          }
          h1 { color: #58a6ff; }
          p { color: #8b949e; }
          .badge {
            background: #238636;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 My Node App</h1>
          <p>Deployed automatically via CI/CD pipeline</p>
          <br/>
          <span class="badge">✅ Pipeline is Working!</span>
        </div>
      </body>
    </html>
  `)
})

module.exports = app