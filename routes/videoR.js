"use strict";
var express = require("express");
var router = express.Router();
const urlControllers = require("../controllers/videoC");
require("dotenv").config();
// 영상별로 API 만들지 논의 해봐야해요~!`
// 나라가 아니라 도시단위로 url 만들어야 하지않을까요?
// 영상 내리는 GET API
router.get("/video", urlControllers.videoUrlRes);
// 일본 영상 내리는 GET API
router.get("/video/japan", urlControllers.Japan);
// 독일 영상 내리는 GET API
router.get("/video/germany", urlControllers.Germany);
module.exports = router;
