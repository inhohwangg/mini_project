const express = require('express')
const router = express.Router()
const {userData,alldataserch,onedataserch,daydataserch} = require('../controllers/post')
const authMiddleware = require('../middleware/authMiddleware')
require("dotenv").config()

//유저 데이터 생성하는 API
router.post('/userData', authMiddleware, userData)

//유저 데이터 가져오기(전체) API
router.get('/alldataserch', authMiddleware, alldataserch)
//유저 데이터 가져오기(한개) API
router.get('/onedataserch', authMiddleware, onedataserch)

//유저 데이터 가져오기(요일만) API
router.get('/daydataserch', authMiddleware, daydataserch)

module.exports = router