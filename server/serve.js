const express = require('express')
const  bodyParser = require ('body-parser') 
const mongoose = require('mongoose');
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())




app.get('/', function (req, res) {
  res.json({
    'mensaje' : 'Bienvenidos al examen del momento II, segundo semestre del 2019'
  });
});



app.get('/Database', function (req, res) {
  
  mongoose.connect('mongodb://localhost:27017/momento2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, res) => {
    if(err)throw err;
    console.log("conectado a la base de datos");   
  });
  res.json({
    'mensaje' : 'conectado'
  });
});




app.get('/saludo/:nombre', function (req, res) {
  res.json({
    'data' : `hola señor/@: ${req.params.nombre}`
  });
});



app.get('/edad/:XY', function (req, res) {
  
  if(req.params.XY > 17){
    res.json({
      'data' : `Eres mayor y tu edad es: ${req.params.XY}`
    })
  }else{
    res.json({
      'data' : `Eres menor y tu edad es: ${req.params.XY}`
    });
  }
  
});



  
  
  let port = process.env.PORT || 1000;
  
  
  app.listen(port, () =>{
    console.log(`servidor ONLINE en el puerto ${port}`);
  });

