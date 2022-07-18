var express = require("express");
var router = express.Router();

const { infoInsert } = require("../controllers/infoInsertController");
require("dotenv").config();

// 나라별 상세정보 입력하는 POST API
router.post("/infoInsert", infoInsert);

module.exports = router;