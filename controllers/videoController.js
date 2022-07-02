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
const { Video } = require("../models");
// API설명 : video URL 가져오기
const VideoURL = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const { videoURL } = videoInfo.dataValues;
        // DB에서 조회한 video url 응답하기
        return res.status(200).json({ videoURL });
    }
    catch (error) {
        console.log(error);
        console.log("[file DIR] : controllers/videoController --> [video URL 가져오기]에서 에러발생");
        res
            .status(400)
            .json({ msg: "알 수 없는 에러가 발생하였습니다. DE팀에 문의해주세요." });
    }
});
module.exports = { VideoURL };
