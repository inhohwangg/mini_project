var express = require("express");
const app = require("express")();
const helmet = require("helmet");
const hpp = require("hpp");
const morgan = require("morgan");
const { sequelize } = require("./models");
const cors = require("cors");
const fs = require("fs");

//MySQL Sequelize 연결
sequelize
  .sync({ force: false }) // sync 메소드로 인해 서버 실행 시 mysql과 연동
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err: any) => {
    console.log(err, "데이터베이스 연결 실패");
  });

//라우터 불러오기
const videoRouter = require("./routes/videoR");
const infoInsertRouter = require("./routes/infoInsertR");

//각종 미들웨어
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(hpp());
app.use(morgan("combined"));
app.use(cors());

//라우터 연결
app.use("/api", [videoRouter]);
app.use("/infoInsert", [infoInsertRouter]);
app.use("/", (req: any, res: any) => {
  res.send("<h1>안녕하세요</h1>");
});

//서버 실행!
app.listen(3000, () => {
  console.log("3000포트로 서버가 켜졌습니다.");
});

app.listen(443, () => {
  console.log("443포트로 서버가 켜졌습니다.");
});
