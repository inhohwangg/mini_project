const {Myprofile,User,Post,Day} = require('../models')

//유저 데이터 생성하는 API, 포지션과 등록기준일 추가
const userData = async(req,res)=> {
    //프론트에서 보내주어야하는 데이터
    const {userId} = req.query

    //사용자가 입력해야하는 항목들
    const {day1,day2,username,checktime,age,gender,phonenumber,signupday,position} = req.body
    try {
        //Post 테이블에 쌓이는 데이터
        const userdatacreate = await Post.create({
            day1,
            day2,
            username,
            checktime,
            age,
            gender,
            phonenumber,
            signupday,
            position})
        
        //Day 테이블에 쌓이는 데이터
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
//썬더클라이언트 확인완료
//토큰값있으면 데이터 가져올수있음
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

//유저 이름으로 데이터 조회하기
//썬더클라이언트 확인완료
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
//썬더클라이언트 확인완료
const daydataserch = async (req,res)=> {
    const {day1,day2} = req.query
    try {
        const daydata = await Post.findAll({where:{day1}})
        const daydata2 = await Post.findAll({where:{day2}})
        res.status(200).json({result:true,msg:"요일 데이터 가져오기 성공",daydata,daydata2})
    }catch(error) {
        console.log(error, "요일 데이터가져오는 곳에서 에러발생함")
        res.status(400).json({result:false,msg:"요일 데이터 가져오기 실패"})
    }
}

//유저 데이터 삭제하기
//썬더클라이언트 확인완료
const dataDelete = async (req,res)=> {
    const {username} = req.query
    try {
        const userdatadelete = await Post.destroy({
            where:{username}
        })
        res.status(200).json({result:true,msg:"데이터 삭제 완료!",userdatadelete})
    }catch(error) {
        console.log(error,"데이터 삭제에서 오류남!")
        res.status(400).json({result:false,msg:"데이터 삭제 실패!"})
    }
}

//유저 데이터 수정하기
//썬더클라이언트 확인완료
const dataModify = async (req,res)=> {
    const {username} = req.query
    const {day1,day2,checktime,age,gender,phonenumber,signupday,position} = req.body
    try {
        const dataput = await Post.update({day1,day2,username,checktime,age,gender,phonenumber,signupday,position},{where:{username}})
        res.status(200).json({result:true,msg:"데이터 수정 성공!",dataput})
    }catch (error) {
        console.log(error, "데이터 수정하기에서 오류 발생함!!")
        res.status(400).json({result:false,msg:"데이터 수정 실패!!"})
    }
}

//메모 입력하기 기능
const userMemo = async(req,res)=> {
    const {username} = req.query
    const {memo} = req.body
    try {
        const nameread = await Post.findOne({where:{username}})
        const namerecreate = await Post.create({nameread})
        console.log(nameread)
        if (!username) {
            res.status(400).json({result:false,msg:"메모 작성이 불가능합니다."})
        }else {
            const memocreate = await Post.update({memo})
            res.status(201).json({result:true,msg:"메모 생성 성공!",memocreate})
        }
        
    }catch(error) {
        console.log(error, "메모입력하기 기능에서 오류발생함")
        res.status(400).json({result:false,msg:"메모 생성 실패!"})
    }
}

module.exports = {userData,alldataserch,daydataserch,dataDelete,dataModify,namedataserch, onedataserch,userMemo}