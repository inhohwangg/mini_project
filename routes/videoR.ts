var express = require("express");
var router = express.Router();
const { videoUrlRes } = require("../controllers/videoController");
require("dotenv").config();

// 영상 내리는 GET API
router.get("/video", videoUrlRes);

module.exports = router;
