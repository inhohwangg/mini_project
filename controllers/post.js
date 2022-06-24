const {Myprofile,User,Post,Day} = require('../models')

//유저 데이터 생성하는 API, 포지션과 등록기준일 추가
const userData = async(req,res)=> {
    const {userId} = req.query
    const {day1,day2,username,checktime,age,gender,phonenumber} = req.body
    try {
        const userdatacreate = await Post.create({
            day1,
            day2,
            username,
            checktime,
            age,
            gender,
            phonenumber})
        const dayplus = await Day.create({
            day1,
            day2,
            username,
            checktime
        })
        res.status(201).json({result:true,msg:"유저데이터 생성 성공!",userdatacreate,dayplus})
    }catch (error){
        console.log(error,"유저데이터 작성 실패")
        res.status(400).json({result:false,msg:"유저데이터 생성 실패"})
    }
}

//유저 전체데이터 가져오기
const alldataserch = async(req,res)=> {
    try {
        const alldata = await Post.findAll()
        console.log(alldata)
        res.status(200).json({result:true,msg:"전체 데이터 가져오기 성공!",alldata})
    }catch (error) {
        console.log(error, "전체 데이터가져오는 곳에서 에러발생함")
        res.status(400).json({result:false,msg:"전체 데이터 가져오기 실패"})
    }
}

//유저 전체데이터 가져오기
const onedataserch = async(req,res)=> {
    const {userId} = req.query
    try {
        const onedata = await Post.findOne()
        res.status(200).json({result:true,msg:"전체 데이터 가져오기 성공!",onedata})
    }catch (error) {
        console.log(error, "전체 데이터가져오는 곳에서 에러발생함")
        res.status(400).json({result:false,msg:"전체 데이터 가져오기 실패"})
    }
}

const namedataserch = async(req,res)=> {
    const {username} = req.query
    
    try {
        const onedata = await Post.findOne({where:{username}})
        console.log(onedata +'여긴가')
        res.status(200).json({result:true,msg:"전체 데이터 가져오기 성공!",onedata})
    }catch (error) {
        console.log(error, "전체 데이터가져오는 곳에서 에러발생함")
        res.status(400).json({result:false,msg:"전체 데이터 가져오기 실패"})
    }
}

//유저 요일데이터 가져오기
const daydataserch = async (req,res)=> {
    const {day1} = req.query
    console.log(day1+'뭘까')
    try {
        const daydata = await Day.findAll({where:{day1}})
        console.log(daydata+'왜안돼')
        res.status(200).json({result:true,msg:"요일 데이터 가져오기 성공",daydata})
    }catch(error) {
        console.log(error, "요일 데이터가져오는 곳에서 에러발생함")
        res.status(400).json({result:false,msg:"요일 데이터 가져오기 실패"})
    }
}

module.exports = {userData,alldataserch,onedataserch,daydataserch,namedataserch}