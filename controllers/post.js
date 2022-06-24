const {Myprofile,User,Post,Day} = require('../models')

//유저 데이터 생성하는 API
//썬더클라이언트 확인완료
const userData = async(req,res)=> {
    //프론트에서 보내주어야하는 데이터
    const {userId} = req.query

    //사용자가 입력해야하는 항목들
    const {day1,day2,username,checktime,age,gender,phonenumber} = req.body
    try {
        //Post 테이블에 쌓이는 데이터
        const userdatacreate = await Post.create({
            day1,
            day2,
            username,
            checktime,
            age,
            gender,
            phonenumber})
        
        //Day 테이블에 쌓이는 데이터
        const dayplus = await Day.create({
            day1,
            day2,
            username
        })
        res.status(201).json({result:true,msg:"유저데이터 생성 성공!",userdatacreate,dayplus})
    }catch (error){
        console.log(error,"유저데이터 작성 실패")
        res.status(400).json({result:false,msg:"유저데이터 생성 실패"})
    }
}

//유저 전체데이터 가져오기
//썬더클라이언트 확인완료
//토큰값있으면 데이터 가져올수있음
const alldataserch = async(req,res)=> {
    try {
        const alldata = await Post.findOne()
        res.status(200).json({result:true,msg:"전체 데이터 가져오기 성공!",alldata})
    }catch (error) {
        console.log(error, "전체 데이터가져오는 곳에서 에러발생함")
        res.status(400).json({result:false,msg:"전체 데이터 가져오기 실패"})
    }
}

//유저 요일데이터 가져오기
//썬더클라이언트 확인완료
const daydataserch = async (req,res)=> {
    const {day1,day2} = req.query
    try {
        const daydata = await Day.findAll({where:{day1}})
        const daydata2 = await Day.findAll({where:{day2}})
        res.status(200).json({result:true,msg:"요일 데이터 가져오기 성공",daydata,daydata2})
    }catch(error) {
        console.log(error, "요일 데이터가져오는 곳에서 에러발생함")
        res.status(400).json({result:false,msg:"요일 데이터 가져오기 실패"})
    }
}

module.exports = {userData,alldataserch,daydataserch}
