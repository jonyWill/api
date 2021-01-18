const Post = require("../models");
module.exports = {

  getPost: async (req, res) => {

    let resposta = await Post.find().sort({like: 'desc'});
    res.status(200).json({resposta});

  },
  plusLike: async (req, res) => {
    
    const resposta = await Post.findById(req.body.id);
    await  Post.findOneAndUpdate({_id:resposta._id},{like: resposta.like + 1}).then((user) => {res.status(200);})

  }

}