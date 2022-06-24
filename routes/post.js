const express = require('express')
const router = express.Router()
const {userData,alldataserch,daydataserch,dataDelete} = require('../controllers/post')
const authMiddleware = require('../middleware/authMiddleware')
require("dotenv").config()

//유저 데이터 생성하는 API
router.post('/userData', authMiddleware, userData)

//유저 데이터 가져오기(전체) API
router.get('/alldataserch', authMiddleware, alldataserch)

//유저 데이터 가져오기(요일만) API
router.get('/daydataserch', authMiddleware, daydataserch)

//유저 데이터 삭제하기 API
router.delete('/dataDelete', authMiddleware, dataDelete)

module.exports = router