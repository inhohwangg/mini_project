"use strict";
var express = require("express");
var router = express.Router();
const { infoInsert, videoCreate, test } = require("../controllers/infoInsertC");
require("dotenv").config();
// 나라별 상세정보 입력하는 POST API
router.post("/infoInsert");
// test
router.get("/videoCreate", videoCreate);
//test2
router.get("/test", test);
module.exports = router;
