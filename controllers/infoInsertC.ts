var { 인호님이정한모델 } = require("../models");
import fs from "fs";

// API설명 : 도시별 상세정보 DB에 입력하기(개발자용 API)
const DBInputResult = async (req: any, res: any) => {
  interface cityInfo {
    cityName: string;
    cityDescription: string;
  }

  // 도시명 배열로 입력
  // 도시명도 여기에 추가해주셔야 합니다!!~!~!~!~!~
  const cityList = ["도쿄", "오키나와"];
  try {
    for (let i = 0; i < cityList.length; i++) {
      const city = cityList[i];

      const file = fs.readFileSync(
        __dirname + `/detailInfo/${city}.json`,
        "utf-8"
      );

      const jsonFile = JSON.parse(file);
      const { cityName, cityDescription }: cityInfo = jsonFile;

      // cityName, cityDescription으로 DB에 삽입하기
      // 인호님이 데이터 넣을 모델 만들어줘야함....!!@!@!
      const infoInputResult = await 인호님이정한모델.create({
        cityName,
        cityDescription,
      });
      const { result }: { result: object } = infoInputResult.dataValues;
      console.log(`${i} : ` + result);
    }
    // DB에 저장한 도시별 정보 응답하기
    return res.status(200).send("OK");
  } catch (error) {
    console.log(error);
    console.log(
      "[file DIR] : controllers/infoInputController --> [도시별 상세정보 DB에 입력하기(개발자용 API)]에서 에러발생"
    );

    res
      .status(400)
      .json({ msg: "알 수 없는 에러가 발생하였습니다. DE팀에 문의해주세요." });
  }
};

module.exports = { DBInputResult };
