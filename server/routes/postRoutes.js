const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/* GET posts */
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: "desc" });
    return res.status(200).json({
      statusCode: 200,
      message: "Fetched all posts",
      data: { posts },
    });
  } catch (err) {
    return next(err);
  }
});

/* GET post */
router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json({
      statusCode: 200,
      message: "Fetched post",
      data: {
        post: post || {},
      },
    });
  } catch (err) {
    return next(err);
  }
});

/* POST post */
router.post("/", async (req, res, next) => {
  try {
    const { title, author, content, tags } = req.body;
    const post = new Post({
      title,
      author,
      content,
      tags,
    });
    await post.save();
    return res.status(201).json({
      statusCode: 201,
      message: "Created post",
      data: { post },
    });
  } catch (err) {
    return next(err);
  }
});

/* PUT post */
router.put("/:id", async (req, res, next) => {
  try {
    const { title, author, content, tags } = req.body;
    const post = await Post.findByIdAndUpdate(req.params.id, {
      title,
      author,
      content,
      tags,
    });

    return res.status(200).json({
      statusCode: 200,
      message: "Updated post",
      data: {},
    });
  } catch (err) {
    return next(err);
  }
});

/* DELETE post */
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await Post.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      statusCode: 200,
      message: `Deleted ${result.deletedCount} post(s)`,
      data: {},
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
