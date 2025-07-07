const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded." });

  res.json({ filename: req.file.filename, path: `/uploads/${req.file.filename}` });
});

// DELETE /api/upload/:filename
router.delete("/:filename", (req, res) => {
  const filePath = path.join(__dirname, "../uploads", req.params.filename);
  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(404).json({ message: "File not found" });
    }
    res.json({ message: "File deleted" });
  });
});

module.exports = router;
