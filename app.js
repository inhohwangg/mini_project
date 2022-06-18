const express = require('express')
const app = require('express')()
const {sequelize} = require('./models')

//MySQL Sequelize 연결
sequelize
    .sync({force: false})
    .then(()=> {
        console.log("데이터베이스 연결 성공")
    })
    .catch((err)=> {
        console.log(err, "데이터베이스 연결 실패")
    })

//라우터 불러오기
const userRouter = require('./routes/user')
const myprofileRouter = require('./routes/myprofile')


//각종 미들웨어
app.use(express.json())
app.use(express.urlencoded())
app.use(express.urlencoded({extended:false}))

//라우터 연결
app.use("/api", [
    userRouter,
    myprofileRouter
])

//서버 실행!
//잔디심기 캠페인
app.listen(3000, ()=> {
    console.log("3000포트로 서버가 켜졌습니다.")
})