const {User} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require("dotenv").config()

//회원가입 API => POST
//썬더클라이언트 테스트 완료
const signup = async(req,res)=> {
    const {userId,userPw,userPwCheck,userNick} = req.body
    try {
        const from = "webSite"
        //비밀번호 해쉬화 10 <- 숫자가 클수록 복잡해짐

        const hashed = bcrypt.hashSync(userPw, 10)
        // userPw:hashed -> 비밀번호를 해쉬화해서 만들고 DB에 저장하겠다는뜻

        //사용자가 입력한 내용을 DB에 만들고 저장하겠다는 뜻
        await User.create({userId,userPw:hashed,userPwCheck:hashed,userNick,from})
        res.status(201).json({result:true,msg:"회원가입 성공!!",userId,userPw:hashed,userPwCheck:hashed,userNick,from})
    }catch(error) {
        console.log(error,'회원가입 POST 오류발생')
        res.status(400).json({result:false,msg:"회원가입 실패"})
    }
}

//로그인 API => POST
//썬더클라이언트 테스트 완료
const login = async(req,res)=> {
    const {userId, userPw} = req.body
    try {
        //사용자가 입력한 아이디를 DB에서 찾아서
        const user = await User.findOne({where:{userId}})
        
        //토큰 옵션 설정 : 유효기간 1일 , 미니테스트용
        const tokenOptions = {expiresIn:"1d", issuer:"mini_test"}

        const unHashPw = bcrypt.compareSync(userPw, user.userPw)
        
        if (user.userId !== userId || unHashPw === false) {
            res.status(401).json({
                msg:"아이디 혹은 비밀번호가 안맞습니다."
            })
        }

        //로그인용 토큰
        const loginToken = jwt.sign(
            {userId:user.userId},
            process.env.KEY,
            tokenOptions
        )
        res.status(200).json({result:true,msg:"로그인 성공",userId,loginToken})
    }catch(error) {
        console.log(error)
        res.status(400).json({result:false,msg:"로그인 실패"})
    }
}

//로그인 체크 API => GET
//썬더클라이언트 테스트 완료
const loginCheck = async(req,res)=> {
    const {userId} = req.query
    try {
        res.status(200).json({result:true,msg:"로그인 체크 완료!"})
    }catch (error) {
        console.log(error,"로그인 체크에서 오류 발생")
        res.status(400).json({result:false,msg:"로그인 체크 오류!!"})
    }
}

//로그아웃 API => GET
//썬더클라이언트 확인완료
const logout = async(req,res)=> {
    const {userId} = req.query
    try {
        return res.cookie("x_auth","").status(200).json({result:true,msg:"로그아웃 성공"})
    }catch(error) {
        console.log(error,"로그아웃 기능에서 오류발생함")
        res.status(400).json({result:true,msg:"로그아웃 성공"})
    }
}

module.exports = {signup, login, loginCheck, logout}