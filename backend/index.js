const connectToMongo=require("./db")
const express = require('express')
const app = express()

app.use(express.json())

connectToMongo();
const port = 3000

//available routes
app.use('/api/auth',require('./routes/auth'))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })