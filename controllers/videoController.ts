var { Video } = require("../models");

// API설명 : video URL 가져오기
const VideoURL = async (req: any, res: any) => {
  // 가져올 video city name을 query로 받기
  const { cityName }: { cityName: string } = req.query;

  try {
    // city name으로 DB 조회하기
    const videoInfo = await Video.findOne({
      logging: false,
      attributes: ["videoURL", "cityName"],
      where: {
        cityName,
      },
    });
    const { videoURL }: { videoURL: object } = videoInfo.dataValues;

    // DB에서 조회한 video url 응답하기
    return res.status(200).json({ videoURL });
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

module.exports = { VideoURL };
