var express = require("express");
var router = express.Router();
const { infoInsert } = require("../controllers/infoInsertC");
require("dotenv").config();

// 나라별 상세정보 입력하는 POST API
router.post("/infoInsert");

module.exports = router;
