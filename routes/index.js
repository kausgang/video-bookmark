var express = require("express");
var router = express.Router();

const fs = require("fs");
const path = require("path");

if (!fs.existsSync("./public/VIDEO")) {
  fs.mkdirSync("./public/VIDEO");
}

filenames = fs
  .readdirSync("./public/VIDEO")
  // .filter((el) => path.extname(el) === ".mp3");
  .filter((el) => path.extname(el) !== ".txt");

// if bookmark for the audio files dont exist , create them
filenames.forEach((element) => {
  if (!fs.existsSync("./public/VIDEO/" + element + ".txt")) {
    fs.writeFileSync("./public/VIDEO/" + element + ".txt", "Start,0" + "\n");
  }
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Video Bookmark", filename: filenames });
});

module.exports = router;
