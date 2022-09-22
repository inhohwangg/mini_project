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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var { Video } = require("../models");
const fs_1 = __importDefault(require("fs"));
// API 설명 : 도시별 상세 정보 불러오기
const infoCityDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cityName } = req.query;
    try {
        const data = fs_1.default.readFileSync('video.json', { encoding: 'utf8' });
        let cityData = JSON.parse(data);
        let name;
        for (let i = 0; i < 11; i++) {
            if (cityName === cityData[i].name) {
                name = cityData[i].description;
                return yield res.status(200).json({ result: true, name });
            }
        }
        throw "지정된 도시명이 맞는지 확인해주세요";
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ result: false, msg: '지정된 도시명이 맞는지 확인해주세요' });
    }
});
//동영상 DB 생성
const videoCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, description } = req.body;
    try {
        yield Video.create(url, description);
        res.status(200).json({ result: true, url, description });
    }
    catch (error) {
        console.log(error, 'code를 확인해주세요');
    }
});
// API설명 : 도시별 상세정보 DB에 입력하기(개발자용 API)
const DBInputResult = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 도시명 배열로 입력
    // 도시명도 여기에 추가해주셔야 합니다!!~!~!~!~!~
    const cityList = ["도쿄", "오키나와"];
    try {
        for (let i = 0; i < cityList.length; i++) {
            const city = cityList[i];
            const file = fs_1.default.readFileSync(__dirname + `/detailInfo/${city}.json`, "utf-8");
            const jsonFile = JSON.parse(file);
            const { cityName, cityDescription } = jsonFile;
            // cityName, cityDescription으로 DB에 삽입하기
            // 인호님이 데이터 넣을 모델 만들어줘야함....!!@!@!
            const infoInputResult = yield Video.create({
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
module.exports = { DBInputResult, videoCreate, infoCityDetail };
