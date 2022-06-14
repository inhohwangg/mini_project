const express = require('express')
const router = express.Router()
const {signup,login,loginCheck,logout} = require('../controllers/user')
const authMiddleware = require('../middleware/authMiddleware')
require("dotenv").config()

//회원가입 기능
router.post('/signup', signup)

//로그인 기능
router.post('/login', login)

//로그인 체크기능
router.get('/loginCheck',authMiddleware ,loginCheck)

//로그아웃 기능
router.get('/logout', authMiddleware,logout)

module.exports = router