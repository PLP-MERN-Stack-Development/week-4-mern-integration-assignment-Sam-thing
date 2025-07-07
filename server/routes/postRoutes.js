const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getAllPosts,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
  addComment,
  incrementView,
  getPostsByCategory,
} = require("../controllers/postController");

router.get("/", getAllPosts);
router.get("/category/:categoryId", getPostsByCategory);
router.get("/:slug", getPostBySlug);
router.post("/", auth, createPost);
router.put("/:slug", auth, updatePost);
router.delete("/:slug", auth, deletePost);
router.post("/:slug/comments", addComment);
router.post("/:slug/view", incrementView);

module.exports = router;
// This code defines the routes for posts in the application.