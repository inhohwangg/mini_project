/// 이건 지워도 되는 파일 아닐까요????

const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능합니다.",
    });
    return;
  }
  try {
    const { userId } = jwt.verify(authToken, process.env.KEY);
    User.findByPk(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (error) {
    console.log(error, "authMiddleware 에서 오류 발생함");
    res.status(400).json({ result: false, msg: "토큰이 유효하지 않습니다." });
    return;
  }
};
