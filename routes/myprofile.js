const express = require('express')
const router = express.Router()
const {mypage, mypageModify}  = require('../controllers/myprofile')
const authMiddleware = require('../middleware/authMiddleware')
require("dotenv").config()

//유저 조회하기
router.get('/mypage',authMiddleware, mypage)

//유저 닉네임 수정하기
router.put('/mypageModify',authMiddleware, mypageModify)

module.exports = router