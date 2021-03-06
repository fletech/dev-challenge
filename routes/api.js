let express = require("express");
const path = require("path");
let multer = require("multer");
let mime = require("mime");

let router = express.Router();
let apiController = require("../controllers/apiController");
let apiPortfolioController = require("../controllers/API_portfolioController");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/uploads"));
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname + "." + mime.getExtension(file.mimetype));
  },
});

var upload = multer({ storage: storage });

/* IMAGE-UPLOADER */
router.get("/image-uploader", apiController.imageUploader);
//Post
router.post(
  "/image-uploader",
  upload.single("imageUploaded"),
  apiController.imageUploaderSave
);

module.exports = router;
