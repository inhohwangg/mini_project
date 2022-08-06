var { Video } = require("../models");

// API설명 : video URL 가져오기
const videoUrlRes = async (req: any, res: any) => {
  // 가져올 video city name을 query로 받기
  const { cityName }: { cityName: string } = req.query;

  try {
    const fukuoka = [
      "https://sideproject-bucket.s3.ap-northeast-2.amazonaws.com/city_total/Fukuoka_total.mp4",
    ];
    const nagoya = [
      "https://sideproject-bucket.s3.ap-northeast-2.amazonaws.com/city_total/Nagoya_total.mp4",
    ];
    const okinawa = [
      "https://sideproject-bucket.s3.ap-northeast-2.amazonaws.com/city_total/Okinawa_total.mp4",
    ];
    const tokyo = [
      "https://sideproject-bucket.s3.ap-northeast-2.amazonaws.com/city_total/Tokyo_total.mp4",
    ];

    let videoUrl;
    if (cityName === "fukuoka") videoUrl = fukuoka;
    else if (cityName === "nagoya") videoUrl = nagoya;
    else if (cityName === "okinawa") videoUrl = okinawa;
    else if (cityName === "tokyo") videoUrl = tokyo;
    else throw "지정된 도시명이 맞는지 확인해주세요";

    // city name으로 DB 조회하기
    /* const videoInfo = await Video.findOne({
      logging: false,
      attributes: ["videoURL", "cityName"],
      where: {
        cityName,
      },
    });
    */

    // 잠시 보류
    // const { videoURL }: { videoURL: object } = videoInfo.dataValues;

    // DB에서 조회한 video url 응답하기
    return res.status(200).json({
      result: true,
      videoUrl: videoUrl,
    }); //videoURL
  } catch (error) {
    console.log(error);
    console.log(
      "[file DIR] : controllers/videoController --> [video URL 가져오기]에서 에러발생"
    );

    res
      .status(400)
      .json({ msg: "알 수 없는 에러가 발생하였습니다. DE팀에 문의해주세요." });
  }
};

// 도시별로 API 만들지 말고 쿼리로 받으면 될거같은데..
// 일본 동영상 API
const Japan = async (req: any, res: any) => {
  try {
    res.status(200).json({
      result: true,
      msg: "성공!!",
      일본1: "첫번째 동영상",
      일본2: "두번째 동영상",
      일본3: "세번째 동영상",
    });
  } catch (error) {
    console.info(error);
    console.info("여기서 오류발생");
    res.status(400).json({ result: false, msg: "실패" });
  }
};

// 그럼 이것도 필요없을듯요?
const Germany = async (req: any, res: any) => {
  try {
    res.status(200).json({
      result: true,
      msg: "성공!!",
      독일1: "첫번째 동영상",
      독일2: "두번째 동영상",
      독일3: "세번째 동영상",
    });
  } catch (error) {
    console.info(error);
    console.info("여기서 오류발생");
    res.status(400).json({ result: false, msg: "실패" });
  }
};

module.exports = { videoUrlRes, Germany, Japan };
