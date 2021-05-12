const mongoose = require("mongoose");
const Post = require("../database/apiPortfolio/models/post");

module.exports = {
  allBlogPosts: (req, res) => {
    Post.find()
      .exec()
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(500).json({ error: err }));
  },
  oneBlogPosts: (req, res) => {
    const id = req.params.id;
    Post.findById(id)
      .exec()
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(500).json({ error: err }));
    //res.status(200).json({});
  },
  newBlogPost: (req, res) => {
    const product = new Post({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    });

    product
      .save()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    return res.send(product);
  },
  editBlogPost: (req, res) => {},
  deleteBlogPost: (req, res) => {},
};
