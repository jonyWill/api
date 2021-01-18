const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Post = new mongoose.Schema({

  descricao: String,
  autor    : String,
  titulo   : String,
  urlPost  : String,
  avatar   : String,
  like     : Number

  
});
module.exports = mongoose.model('post', Post);


