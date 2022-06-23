const {Myprofile,User,Post} = require('../models')

//유저 데이터 생성하는 API
const userData = async(req,res)=> {
    const {userId} = req.query
    const {day,username,checktime,age,gender,phonenumber} = req.body
    try {
        const userdatacreate = await Post.create({
            day,
            username,
            checktime,
            age,
            gender,
            phonenumber})
        res.status(201).json({result:true,msg:"유저데이터 생성 성공!",userdatacreate})
    }catch (error){
        console.log(error,"유저데이터 작성 실패")
        res.status(400).json({result:false,msg:"유저데이터 생성 실패"})
    }
}

//유저 전체데이터 가져오기
const alldataserch = async(req,res)=> {
    const {userId} = req.query
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

//유저 요일데이터 가져오기
const daydataserch = async (req,res)=> {
    const {day} = req.query
    try {
        const daydata = await Post.findOne({attribute:["day"],where:{day}})
    }catch(error) {
        console.log(error, "요일 데이터가져오는 곳에서 에러발생함")
        res.status(400).json({result:false,msg:"요일 데이터 가져오기 실패"})
    }
}

module.exports = {userData,alldataserch,onedataserch,daydataserch}