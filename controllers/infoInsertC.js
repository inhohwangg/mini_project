"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var { 인호님이정한모델 } = require("../models");
const fs = require("fs");
// API설명 : 도시별 상세정보 DB에 입력하기(개발자용 API)
const DBInputResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cityList = ["도쿄", "오키나와"];
    try {
        for (let i = 0; i < cityList.length; i++) {
            const city = cityList[i];
            const file = fs.readFileSync(__dirname + `/detailInfo/${city}.json`, "utf-8");
            const jsonFile = JSON.parse(file);
            const { cityName, cityDescription } = jsonFile;
            // cityName, cityDescription으로 DB에 삽입하기
            const infoInputResult = yield 인호님이정한모델.create({
                cityName,
                cityDescription,
            });
            const { result } = infoInputResult.dataValues;
            console.log(`${i} : ` + result);
        }
        // DB에 저장한 도시별 정보 응답하기
        return res.status(200).send("OK");
    }
    catch (error) {
        console.log(error);
        console.log("[file DIR] : controllers/infoInputController --> [도시별 상세정보 DB에 입력하기(개발자용 API)]에서 에러발생");
        res
            .status(400)
            .json({ msg: "알 수 없는 에러가 발생하였습니다. DE팀에 문의해주세요." });
    }
});
module.exports = { DBInputResult };
