const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const app = express();
const mongoose = require('mongoose');

// configurando o banco de dados
mongoose.connect('mongodb://localhost:27017/Conecta',
  {
    useNewUrlParser   : true,
    useFindAndModify  : false,
    useUnifiedTopology: true
  });
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(error)=>{
  console.log(`error: ${error}`);
});


app.use((req, res, next)=>{
  
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/',router);
app.listen(8080, '127.0.0.1',()=>{
  console.log(`Rodando na url: http://localhost:8080`);
});