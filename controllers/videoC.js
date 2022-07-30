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
var { Video } = require("../models");
// API설명 : video URL 가져오기
const videoUrlRes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // 가져올 video city name을 query로 받기
    const { cityName } = req.query;
    try {
        // city name으로 DB 조회하기
        const videoInfo = yield Video.findOne({
            logging: false,
            attributes: ["videoURL", "cityName"],
            where: {
                cityName,
            },
        });
        // 잠시 보류
        // const { videoURL }: { videoURL: object } = videoInfo.dataValues;
        // DB에서 조회한 video url 응답하기
        return res
            .status(200)
            .json({
            result: true,
            msg: "데이터 준비중입니다. 잠시만 기다려주세요;;;",
        }); //videoURL
    }
    catch (error) {
        console.log(error);
        console.log("[file DIR] : controllers/videoController --> [video URL 가져오기]에서 에러발생");
        res
            .status(400)
            .json({ msg: "알 수 없는 에러가 발생하였습니다. DE팀에 문의해주세요." });
    }
});
// 일본 동영상 API
const Japan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            result: true,
            msg: "성공!!",
            일본1: "첫번째 동영상",
            일본2: "두번째 동영상",
            일본3: "세번째 동영상",
        });
    }
    catch (error) {
        console.info(error);
        console.info("여기서 오류발생");
        res.status(400).json({ result: false, msg: "실패" });
    }
});
const Germany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            result: true,
            msg: "성공!!",
            독일1: "첫번째 동영상",
            독일2: "두번째 동영상",
            독일3: "세번째 동영상",
        });
    }
    catch (error) {
        console.info(error);
        console.info("여기서 오류발생");
        res.status(400).json({ result: false, msg: "실패" });
    }
});
module.exports = { Germany, Japan };
