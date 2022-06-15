const express = require('express')
const router = express.Router()
const {mypage}  = require('../controllers/myprofile')
const authMiddleware = require('../middleware/authMiddleware')
require("dotenv").config()

//유저 조회하기
router.get('/mypage', mypage)

module.exports = router