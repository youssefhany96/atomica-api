const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");

/* POST comment */
router.post("/:postId", async (req, res, next) => {
  try {
    const { text, author } = req.body;
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = new Comment({ text, author });
    post.comments.push(comment);
    await comment.save();
    await post.save();

    res.status(201).json({
      message: "Comment added",
      data: { comment },
    });
  } catch (error) {
    next(error);
  }
});

/* GET comments for a post */
router.get("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId).populate("comments");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({
      message: "Comments fetched",
      data: { comments: post.comments },
    });
  } catch (error) {
    next(error);
  }
});

/* PUT comment */
router.put("/:commentId", async (req, res, next) => {
  try {
    const { text, author } = req.body;
    const comment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      { text, author },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({
      message: "Comment updated",
      data: { comment },
    });
  } catch (error) {
    next(error);
  }
});

/* DELETE comment */
router.delete("/:commentId", async (req, res, next) => {
  try {
    const result = await Comment.deleteOne({ _id: req.params.commentId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({
      message: `Deleted comment`,
      data: {},
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
