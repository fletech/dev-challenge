let express = require("express");
const path = require("path");
// let multer = require("multer");
// let mime = require("mime");

let router = express.Router();
let apiPortfolioController = require("../controllers/API_portfolioController");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../public/images/uploads"));
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     cb(null, file.originalname + "." + mime.getExtension(file.mimetype));
//   },
// });
// var upload = multer({ storage: storage });

/* BLOG */
router.get("/api/posts", apiPortfolioController.allBlogPosts);
router.get("/api/post/:id", apiPortfolioController.oneBlogPosts);
router.post("/api/new-post", apiPortfolioController.newBlogPost);
router.patch("/api/post/:id", apiPortfolioController.editBlogPost);
router.delete("/api/post/:id", apiPortfolioController.deleteBlogPost);

module.exports = router;
