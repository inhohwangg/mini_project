var express = require("express");
var router = express.Router();
const videoUrl = require("../controllers/videoC");
require("dotenv").config();

// 일본 영상 내리는 GET API
router.get("/videoj", videoUrl.Japan);

// 독일 영상 내리는 GET API
router.get("/videog", videoUrl.Germany);

module.exports = router;
