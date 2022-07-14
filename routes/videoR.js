"use strict";
var express = require("express");
var router = express.Router();
const videoUrlResJ = require("../controllers/videoC");
const videoUrlResG = require("../controllers/videoC");
require("dotenv").config();
// 일본 영상 내리는 GET API
router.get("/videoj", videoUrlResJ.VideoURLJ);
// 독일 영상 내리는 GET API
router.get("/videog", videoUrlResG.VideoURLG);
module.exports = router;
