const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.decription,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/:postID", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    res.json(post);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.delete("/:postID", async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.postID);
    res.json(post);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.patch("/:postID", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postID,
      req.body,
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
