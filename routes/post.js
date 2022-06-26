const express = require('express')
const router = express.Router()
const {userData,alldataserch,onedataserch,daydataserch,dataDelete,dataModify,namedataserch,userMemo} = require('../controllers/post')
const authMiddleware = require('../middleware/authMiddleware')
require("dotenv").config()

//유저 데이터 생성하는 API
router.post('/userData', authMiddleware, userData)

//유저 데이터 가져오기(전체) API
router.get('/alldataserch', authMiddleware, alldataserch)

//유저 데이터 가져오기(한개) API
router.get('/onedataserch', authMiddleware, onedataserch)

//유저 이름검색 가져오기(한개) API
router.get('/namedataserch', authMiddleware, namedataserch)

//유저 데이터 가져오기(요일만) API
router.get('/daydataserch', authMiddleware, daydataserch)

//유저 데이터 삭제하기 API
router.delete('/dataDelete', authMiddleware, dataDelete)

//유저 데이터 수정하기 API
router.put('/dataModify', authMiddleware, dataModify)

//유저 메모(특이사항) 입력하기
router.post('/userMemo', authMiddleware, userMemo)

module.exports = router