var express = require("express");
var router = express.Router();
const { infoInsert, infoCityDetail} = require("../controllers/infoInsertC");
require("dotenv").config();

// 나라별 상세정보 입력하는 POST API
router.post("/infoInsert");

// 나라별 상세정보 가져오는 API
router.get('/infoCityDetail', infoCityDetail)


module.exports = router;
