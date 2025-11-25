const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.get('',(req,res)=>{
  console.log(req.query);
  res.send('Hola mundo');
})
app.get('/alumnos', (req, res) => {
  console.log(req.query);
  res.send('23100151');
})

app.get('/docentes/:control'),(req, res)=>{
  console.log(req.params);
  res.send('L23100151');
}

app.get('/directivos',(req,res)=>{
  console.log(req.query);
  res.send('D23100151');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})