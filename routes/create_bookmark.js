var express = require("express");
var router = express.Router();

var fs = require("fs");

router.post("/", function (req, res, next) {
  let filename = req.body.filename;
  let bookmark_name = req.body.bookmark_name,
    timestamp = req.body.timestamp;

  // ENTER ADDING BOOKMARK LOGIC HERE (FS OPERATIONS)

  if (fs.existsSync("./public/VIDEO/" + filename + ".txt")) {
    console.log("if loop");
    fs.appendFile(
      "./public/VIDEO/" + filename + ".txt",
      bookmark_name + "," + timestamp + "\n",

      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  } else {
    console.log("else loop");
    fs.writeFileSync(
      "./public/VIDEO/" + filename + ".txt",
      bookmark_name + "," + timestamp + "\n"
    );
  }

  res.sendStatus(200);
});

module.exports = router;
