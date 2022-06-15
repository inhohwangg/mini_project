const {Myprofile,User} = require('../models')
require("dotenv").config()

//마이페이지 API => GET
//썬더클라이언트 테스트 완료
const mypage = async(req,res)=> {
    const {userId} = req.query
    try {
        const mypages = await User.findAll({
            attributes:["userId","userNick"] ,
            where:{userId}
        })
        res.status(200).json({result:true,msg:"마이페이지 조회 성공",mypages})
    }catch (error) {
        console.log(error, "마이페이지 조회 오류")
        res.status(400).json({result:false,msg:"마이페이 조회 실패"})
    }
}

module.exports = {mypage}