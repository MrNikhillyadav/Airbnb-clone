const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors({
    credentials : true,
    origin : 'http://localhost:5173/register';
}))

app.get('/test', (req, res) => {
    res.json('test successful');
  })


  app.listen(4000);
  {
    console.log("I am listening!")
  };